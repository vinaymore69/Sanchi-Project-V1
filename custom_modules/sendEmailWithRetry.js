const nodemailer = require('nodemailer');

async function sendEmailWithRetry(transporter, mailOptions, maxRetries = 3, delay = 1000) {
    let attempt = 0;
    let success = false;

    while (attempt < maxRetries && !success) {
        try {
            await transporter.sendMail(mailOptions);
            success = true; // Break the loop if successful
        } catch (err) {
            attempt++;
            console.error(`Error sending mail to(Attempt ${attempt}):`, err);
            
            if (attempt >= maxRetries) {
                throw new Error('Max retries reached. Email not sent.');
            }
            
            // Exponential backoff: delay doubles with each failed attempt
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2; // Double the delay for next retry
        }
    }
}

module.exports = sendEmailWithRetry;