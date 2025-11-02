const express = require('express');
const router = express.Router();
const fs = require('fs');

// const nodemailer = require('nodemailer');
const path = require('path');
const { Pool } = require('pg');

const { ensureAuthenticated } = require('../routes/auth');

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

router.get('/video', async (req, res) => {
    const response = await pool.query("SELECT * FROM videos");

    res.render("videogrid.ejs", {videos: response.rows});
});

router.get('/audio', async (req, res) => {
    const response = await pool.query("SELECT * FROM audiobook WHERE subtitles_path IS NOT NULL");

    res.render("audiogrid.ejs", {audiobooks: response.rows});
});

router.get('/notes', async (req,res) => {
    notesObj = [];
    
    const response = await pool.query("SELECT class_name,category_name,notes_name,file_path,thumb_path FROM notes_table WHERE category_name=$1",["Science"]);
    notesObj[0] = response.rows;

    const response2 = await pool.query("SELECT class_name,category_name,notes_name,file_path,thumb_path FROM notes_table WHERE category_name=$1",["Maths"]);
    notesObj[1] = response2.rows;

    const response3 = await pool.query("SELECT class_name,category_name,notes_name,file_path,thumb_path FROM notes_table WHERE category_name=$1",["Geography"]);
    notesObj[2] = response3.rows;

    const response4 = await pool.query("SELECT class_name,category_name,notes_name,file_path,thumb_path FROM notes_table WHERE category_name=$1",["Hindi"]);
    notesObj[3] = response4.rows;

    const response5 = await pool.query("SELECT class_name,category_name,notes_name,file_path,thumb_path FROM notes_table WHERE category_name=$1",["English"]);
    notesObj[4] = response5.rows;

    res.render("notesgrid.ejs",{notes:notesObj});
})

module.exports = router;