const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const { Pool } = require('pg');
const { randomUUID } = require('crypto');  // Correct import


// Initialize disk storage with dynamic filename
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/files/uploads/contact_us_message'); // Specify the directory to store files
    },
    filename: (req, file, cb) => {
        // Generate a unique filename for each file
        const originalName = file.originalname;
        cb(null, `${originalName}`); // Save with original name
    }
});

const upload = multer({ storage: storage });

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

// router.set("view engine","ejs");

// router.get('/', (req, res) => {
//     // const data = 

//     res.send();
// });


const sendEmailWithRetry = require('../custom_modules/sendEmailWithRetry');

// Create transporter for sending email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

router.post('/', upload.array('attachments[]'), async (req, res) => {
    try {
        const { email, title, message, first_name, last_name, file_names } = req.body;

        // Ensure file names are an array (if only one file is submitted, it might be a string)
        const fileNamesArray = Array.isArray(file_names) ? file_names : (file_names ? [file_names] : []);

        // Generate UUID4 for each file and construct new file names
        const uuidFileNames = req.files.map((file, index) => {
            const random = randomUUID().split('-')[0];

            const uuidFileName = fileNamesArray[index] || file.originalname; // Generate UUID4 for the file

            const uuidWithRandom = uuidFileName + '_' + random + path.extname(file.originalname);

            fs.rename(`./uploads/contact_us_message/${file.originalname}`, `./uploads/contact_us_message/${uuidWithRandom}`,
                (err) => {
                    if (err)
                        return `fs-error: ${err}`
                });

            return uuidWithRandom;  // Append the original file extension
        });

        // Prepare file names (UUIDs) for database storage
        const fileNamesInDb = uuidFileNames.length ? uuidFileNames : null;

        const emailBody = `You have received a message from ${first_name} ${last_name},\n${message}`;

        const mailOptions = {
            from: email,
            to: `pruthveesh.gharal@gmail.com`,
            subject: title,
            text: emailBody,
            // Attach files with the generated UUID4 file names
            attachments: req.files.map((file, index) => ({
                filename: uuidFileNames[index],  // Use the UUID as the filename for email attachment
                content: file.buffer,
            })),
        };

        try {
            await sendEmailWithRetry(transporter, mailOptions);
            res.status(200).send("Your email has been sent.");
        } catch (err) {
            res.status(500).send(`An error occurred while sending the  email. Please try again later.`);
            console.error(err); // Log error for debugging
            return;
        }

        // Insert data into the database, storing only the file names (UUID4)
        const query = `INSERT INTO contact_us_messages 
            (first_name, last_name, user_email, title, message, attachment_file_names)
            VALUES ($1, $2, $3, $4, $5, $6)`;

        const data = [
            first_name,
            last_name,
            email,
            title,
            message,
            fileNamesInDb,  // Store only UUID file names in DB
        ];

        const result = await pool.query(query, data);

        if (result.rowCount > 0) {
            console.log('Data stored Succesfully!');
        } else {
            console.log('Data not saved Succesfully :-(');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

module.exports = router;
