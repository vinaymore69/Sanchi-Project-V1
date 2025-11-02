const express = require('express');
const router = express.Router();

const passport = require('passport');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const pg = require('pg');

const { Pool } = pg;

// Assuming you have already set up your PostgreSQL connection pool
const pool = new Pool({
    host: 'localhost',
    user: process.env.DB_USER,
    port: 5432,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    max: 10, // Max number of users
    idleTimeoutMillis: 30000, // Stay idle for
    connectionTimeoutMillis: 2000,
});

// Create transporter for sending email 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    pool: true, // Enable connection pooling
    maxConnections: 5, // Maximum simultaneous connections
    maxMessages: 100, // Maximum messages per connection
    rateDelta: 2000, // Limit messages to one every 2 seconds
    rateLimit: 1, // Limit of 1 message per interval
});

router.get('/errorPage', checkNotAuthenticated, (req, res) => {
    const flashMessage = req.flash('error'); // Fetch flash messages

    res.send(`
        ${flashMessage.length > 0 ? `<p>Error: ${flashMessage[0]}</p>` : ''}
    `);
});

router.post(
    '/login',
    checkNotAuthenticated,
    passport.authenticate('local', {
        failureRedirect: '/auth/errorPage',
        successRedirect: '/user/dashboard',
        failureFlash: true, // Enable error messages
    }),
    (req, res) => {
        // Post-login custom logic can still be added here if needed
        if (req.user.partialAuth) {
            return res.redirect('/auth/verifyEmailPage'); // Redirect unverified users
        }
    }
);

// Logout route
router.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) return next(err);
        res.redirect('/');
    });
});

const calculateAge = require('../custom_modules/calculateAge');
const sendEmailWithRetry = require('../custom_modules/sendEmailWithRetry');


router.post('/signup', async (req, res) => {
    const { email, password, username, first_name, last_name, gender, date, address } = req.body;

    const alreadyExists = await pool.query(`SELECT username FROM signup WHERE email = $1`, [email]);

    if (alreadyExists.rowCount > 0) {
        return res.status(409).json({ error: `Email address ${email} already exists` });
    }

    req.session.user = username;
    req.session.email = email;
    req.session.partialAuth = true;

    const age = calculateAge(date); //check if greater than 7

    if (age < 7) {
        return res.status(412).json({ error: `User's age is ${age}. \nIt should be at least 7 years of age to create an Account` });
    }

    const token = crypto.randomUUID();
    const verificationUrl = `http://localhost:3000/auth/verify-token?token=${token}`;

    //Mail Options
    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: `Email Verification Link from Sanchi.com`,
        html: `<p>
                Click on the link below to verify: 
                <br>
                <a href=${verificationUrl} about='_blank'>Verification link</a>
            </p>`
    };

    try {
        await sendEmailWithRetry(transporter, mailOptions);
        res.redirect('/auth/verifyEmailPage');
    } catch (err) {
        res.status(500).send(`An error occurred while sending the verification email. Please try again later.`);
        console.error(err); // Log error for debugging
        return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const values = [first_name, last_name, gender, date, age, address, email, username, hashedPassword, false, token];

    const dbResult = await pool.query(`INSERT INTO signup 
        (
            first_name,
            last_name,
            gender,
            date_of_birth,
            age,
            address,
            email,
            username,
            password,
            verified,
            token
        ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`, values);

    if (dbResult.rowCount > 0) {
        console.log('User created successfully!');
    } else {
        console.log("Uh oh!");
    }
});

router.get('/verifyEmailPage', ensurePartiallyAuthenticated, (req, res) => {
    if (req.session.email)
        res.render('emailVerification.ejs', { email: req.session.email });
    else
        res.redirect('/signup.html');
});

router.get('/verify-token', async (req, res, next) => {
    const { user, email } = req.session;
    const token = req.query.token;

    if (user && email) {
        try {
            const dbTokenRes = await pool.query(
                `SELECT * FROM signup WHERE username=$1 AND email=$2`,
                [user, email]
            );

            if (dbTokenRes.rowCount > 0) {
                const dbToken = dbTokenRes.rows[0].token;

                // Check if the token matches
                if (token === dbToken) {
                    // Update user as verified
                    const result = await pool.query(
                        `UPDATE signup SET token='', verified=true WHERE username=$1 AND email=$2 RETURNING *;`,
                        [user, email]
                    );

                    if (result.rowCount > 0) {
                        const updatedUser = result.rows[0];

                        // Automatically log in the user
                        req.login(updatedUser, (err) => {
                            if (err) {
                                console.error(err);
                                return next(err); // Handle login errors
                            }

                            // Redirect to dashboard after successful login
                            req.session.partialAuth = false;
                            res.redirect('/user/dashboard');
                        });
                    } else {
                        res.status(500).send('Verification failed.');
                    }
                } else {
                    res.status(400).send('Invalid token.');
                }
            } else {
                res.status(400).send('User not found or already verified.');
            }
        } catch (error) {
            console.error(error);
            res.status(503).send("Service Unavailable: Database not connected");
        }
    } else {
        res.status(400).send('Session expired or invalid token.');
    }
});

router.post('/reset-password', async (req, res) => {
    const { email, new_password } = req.body;

    const result = await pool.query("SELECT email, verified FROM signup WHERE email=$1", [email]);

    if ((result.rows[0].email == email) && result.rows[0].verified == true) {
        const reset_token = crypto.randomUUID();
        const verificationUrl = `http://localhost:3000/auth/verify-reset-token?token=${reset_token}`;

        //Mail Options
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: email,
            subject: `Email Reset Link from Sanchi.com`,
            html: `<p>
            Click on the link below to Reset your Password: 
            <br>
            <a href=${verificationUrl} about='_blank'>Verification link</a>
            </p>`,
        };

        await sendEmailWithRetry(transporter, mailOptions);
        res.status(200).json({ message: "Verification Email Sent!" });

        req.session.email = email; //Initializing to verify the token so that I can retrieve it in verify-reset-token

        const response = await pool.query(`INSERT INTO signup_backup (user_id, email, new_password, reset_token) 
            SELECT id, email, $1, $2
            FROM signup 
            WHERE email = $3;
            `,
            [
                new_password,
                reset_token,
                email
            ]);

        if (response.rowCount > 0) {
            console.log("Uploaded successfully!");
        }

    } else {
        res.status(412).json({ message: "Email not found!\n Make sure you are using correct email ID" });
    }
});

router.get('/verify-reset-token', async (req, res) => {
    const resetToken = req.query.token;

    try {
        const resetTokenRes = await pool.query(
            `SELECT * FROM signup_backup WHERE reset_token=$1`,
            [resetToken]
        );

        if (resetTokenRes.rowCount > 0) {
            const resetDbToken = resetTokenRes.rows[0].reset_token;
            const newPassword = resetTokenRes.rows[0].new_password;
            const email = resetTokenRes.rows[0].email;

            const hashedPassword = await bcrypt.hash(newPassword, 10);

            // Check if the token matches
            if (resetDbToken === resetToken) {
                // Update user as verified
                const result = await pool.query(
                    `UPDATE signup SET password=$1 WHERE email=$2 RETURNING *`,
                    [hashedPassword, email]
                );

                if (result.rowCount > 0) {
                    const updatedUser = result.rows[0];

                    // Automatically log in the user
                    req.login(updatedUser, (err) => {
                        if (err) {
                            console.error(err);
                            return next(err); // Handle login errors
                        }

                        res.redirect('/user/dashboard');
                    });
                } else {
                    res.status(500).send('Re-verification failed.');
                }
            } else {
                res.status(400).send('Invalid token.');
            }
        } else {
            res.status(400).send('Could not find your record');
        }
    } catch (error) {
        console.error(error);
        res.status(503).send("Service Unavailable: Database not connected");
    }

});

router.get('/resend-verification', async (req, res) => {
    const { email } = req.session;
    console.log(req.session);
    console.log(req.session.email);


    if (req.session.partialAuth) {
        const userCheck = await pool.query(`SELECT * FROM signup WHERE email = $1`, [email]);

        console.log(userCheck);
        console.log(userCheck.rows[0]);

        if (userCheck.rowCount > 0) {
            const verificationUrl = `http://localhost:3000/auth/verify-token?token=${userCheck.rows[0].token}`;

            console.log(verificationUrl);

            //Mail Options
            const mailOptions = {
                from: process.env.EMAIL_FROM,
                to: email,
                subject: `Email Verification Link from Sanchi.com`,
                html: `<p>
            Click on the link below to verify: 
            <br>
            <a href=${verificationUrl} about='_blank'>Verification link</a>
            </p>`,
            };

            try {
                await sendEmailWithRetry(transporter, mailOptions);
                res.status(200).send("Verification email resent.");
            } catch (err) {
                res.status(500).send(`An error occurred while sending the verification email. Please try again later.`);
                console.error(err); // Log error for debugging
                return;
            }
        } else {
            res.status(400).send("Invalid request or email is already verified.");
        }
    } else {
        res.send("Your Email has not been registered");
    }
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next(); // User is authenticated, proceed to the next middleware/route
    }

    //remove this later
    // Check if the failure was due to email not being verified
    if (req.session.partialAuth == true) {
        // Redirect to the email verification page
        res.redirect('/auth/verifyEmailPage');
    } else {
        res.redirect('http://localhost:3000/newlogin.html'); // Redirect to login page if not authenticated
    }
}

function ensurePartiallyAuthenticated(req, res, next) {
    if (req.session.partialAuth == true) {
        next();
    } else {
        res.redirect('/newlogin.html');
    }
}

function checkNotAuthenticated(req, res, next) {
    if (!(req.isAuthenticated())) { //If he is not authenticated
        // Check if the failure was due to email not being verified
        if (req.session.partialAuth == true) {
            // Redirect to the email verification page
            res.redirect('/auth/verifyEmailPage');
        } else {
            next();
        }
    } else {
        res.redirect('/user/dashboard');
    }
}

module.exports = router;
module.exports.ensureAuthenticated = ensureAuthenticated;