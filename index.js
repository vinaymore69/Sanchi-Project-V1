const express = require('express');
const session = require('express-session');

const path = require('path');
const passport = require('passport');

const flash = require('connect-flash');
const pg = require('pg');

const { Pool } = pg;

const app = express();
require('dotenv').config(); // Load environment variables

app.set("view engine", "ejs");

/*HELPER FUNCTIONS to define the Passport checking Procedure*/
// Fetch user by email
const getUserByUsername = async (username) => {
    const result = await pool.query(`SELECT * FROM signup WHERE username = $1`, [username]);
    return result.rows[0]; // Return user object if found 
};

// Fetch user by ID
const getUserById = async (id) => {
    const result = await pool.query(`SELECT * FROM signup WHERE id = $1`, [id]);
    return result.rows[0];
};

//Defining Passport Strategy (or Defining what Passport should do on login)
const definePassport = require('./config/passport-config');
definePassport(passport, getUserByUsername, getUserById);

app.use(session({
    secret: process.env.SESSION_SEC,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000 //7 days
    }
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

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

// Middleware to protect certain static files
app.use((req, res, next) => {
    const restrictedPaths = ['/newlogin.html', '/signup.html', '/dashboard.ejs', '/emailVerification.ejs','/resetPassword.html']; //Purely for Good User Experience

    if (restrictedPaths.some(path => req.originalUrl.includes(path))) {
        if (req.session.partialAuth == true) { //User has not verifed yet
            return res.redirect('/auth/verifyEmailPage');
        } else if (req.user) {
            return res.redirect('/user/dashboard');
        } else if (req.originalUrl.includes('/dashboard.html')) {
            return res.redirect('/user/dashboard');
        } else if (req.originalUrl.includes('/audioPlayer.html')) {
            return res.redirect('/user/audio-play-demo');
        }
    }
    next();
});


app.use(express.static(path.join(__dirname, "public/files")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

const contactRouter = require('./routes/contact');
app.use('/contact', contactRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const resourceRouter = require('./routes/resources');
app.use('/resource', resourceRouter);

// Start the server
app.listen(3000, () => console.log("Server running at http://localhost:3000"));
