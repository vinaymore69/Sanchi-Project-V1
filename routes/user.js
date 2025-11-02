const express = require('express');
const router = express.Router();
const fs = require('fs');

// const nodemailer = require('nodemailer');
const path = require('path');
const { Pool } = require('pg');
const { createCanvas } = require("canvas");
const pdfPoppler = require("pdf-poppler");

const { ensureAuthenticated } = require('../routes/auth');
const multer = require('multer');

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

// Protected route example
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    if (req.isAuthenticated()) {
        let first_name_letter = req.user.first_name.charAt(0);
        res.render('dashboard', {
            img_src: `/user/profile-pic?letter=${first_name_letter}`,
            first_name: req.user.first_name,
            last_name: req.user.last_name,
            username: req.user.username,
            email: req.user.email,
            age: req.user.age,
            address: req.user.address
        });

    } else {
        res.redirect('/auth/errorPage');
    }
});

router.get('/db_notes', async (req, res) => {
    let count = null;
    try {
        let result = await pool.query(`SELECT array_length(note_content, 1) AS array_length, note_content, note_color FROM notes WHERE user_id = $1;`, [req.user.id]);

        if (result.rowCount > 0) {
            count = result.rows[0].array_length;
            let note_content_array = result.rows[0].note_content;
            let note_color_array = result.rows[0].note_color;


            res.status(200).send({
                count: count,
                note_content_array: note_content_array,
                note_color_array: note_color_array
            });
        } else if (result.rows.length == 0) {
            res.status(200).send({
                no_rows: true
            });

        }
    } catch (error) {
        console.error(error);
    }
});

router.post('/notes', ensureAuthenticated, async (req, res) => {
    const userId = req.user.id;
    console.log(req.body);

    const result = await pool.query(`SELECT notes_set_id FROM notes WHERE user_id = $1`, [userId]);
    console.log(result.rowCount);

    if (result.rowCount == 0) { //User has no set
        try {
            const response = await pool.query(`INSERT INTO notes (user_id, note_content, note_color) 
            VALUES
                ($1, ARRAY[$2], ARRAY[$3]) RETURNING *`, [userId, req.body.note_content, req.body.note_color]);

            if (response.rowCount > 0) {
                console.log('No Error storing');
            }
        } catch (error) {
            console.error(error);
        }
    } else {
        //First we will check if the Note Exists or not
        //If Note Exists, it will only be modified be or new Note will be created
        let note_id = req.body.note_id + 1;

        const result = await pool.query(`SELECT note_content[$1] FROM notes WHERE user_id=$2`, [note_id, userId]);

        console.log(result.rows[0].note_content);
        if (result.rows[0].note_content == null) {
            const { note_content, note_color } = req.body;

            if (!note_color) {
                note_color = 'rgb(254, 201, 167)';
            }

            await pool.query(`UPDATE notes
            SET note_content = array_remove(array_append(note_content, $1), NULL),
	                           note_color = array_append(note_color, $2)
            WHERE user_id = $3 RETURNING *`, [note_content, note_color, userId]);
        } else {
            try {
                const response = await pool.query(
                    `UPDATE notes
                SET note_content[$1] = $2 
                WHERE user_id = $3 RETURNING *`, [note_id, req.body.note_content, userId]);

                if (response.rowCount > 0) {
                    console.log(`No Error Updating`);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }
});

const uploadNotes = require('../custom_modules/uploadNotes');

router.post('/digi_notes_upload', uploadNotes.single('notesFile'), async (req, res) => {
    try {
        console.log(req.body);
        let thumbDir = path.join(__dirname, '..', 'public', 'files', 'uploads', 'digi_notes', req.body.categorySelect,req.body.classSelect,'thumbnail');

        if(!fs.existsSync(thumbDir)) {
            fs.mkdirSync(thumbDir);
        }

        // Convert PDF first page to image
        const pdfOptions = {
            format: "jpeg",
            out_dir: thumbDir,
            out_prefix: req.file.filename.slice(0,-4),
            page: 1,
        };

        try {
            console.log(req.files.notesFile.path);
            await pdfPoppler.convert(req.files.notesFile.path, pdfOptions);
        } catch (error) {
            console.log("Thumbnail creation failed");
        }

        //Database Storage
        let notesFileName = req.body.notesFileName;
        // const thumb_path = path.join(thumbDir,notesFileName,".jpg");
        const filepath = req.files.notesFile.path;

        let db_filepath = "/uploads/digi_notes/" + categorySelect + "/" + classSelect + "/" + + notesFileName + ".pdf";
        let db_thumb_path = "/uploads/digi_notes/" + categorySelect + "/" + classSelect + "/thumbnail/" + notesFileName + ".jpg";

        const response = await pool.query("INSERT INTO notes_table (user_id,class_name,category_name,file_path,thumb_path,notes_name) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *",
            [
                req.user.id,
                req.body.classSelect,
                req.body.categorySelect,
                db_filepath,
                db_thumb_path,
                notesFileName
            ]
        );

        if(response.rowCount > 0) {
            res.send("File Successfully Uploaded!");
        }
    } catch (error) {
        console.error(error);
        res.send('Error while uploading files');
    }
});

// Function to generate profile picture
function generateProfilePic(letter) {
    const size = 200; // Canvas size (200x200 pixels)
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext("2d");

    // Draw a colored circle
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fillStyle = "#4CAF50"; // Background color (e.g., green)
    ctx.fill();

    // Draw the letter
    ctx.fillStyle = "#FFFFFF"; // White text
    ctx.font = `${size * 0.5}px Arial`; // Font size (50% of canvas size)
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(letter, size / 2, size / 2);

    return canvas;
}

//For Audiobook Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let uploadPath;

        // Check the file type to determine the folder
        if (file.mimetype.startsWith('image/')) {
            uploadPath = path.join(path.resolve(__dirname, '..'), '/public/files/uploads/audio/thumbnail');
        } else if (file.mimetype.startsWith('audio/')) {
            uploadPath = path.join(path.resolve(__dirname, '..'), '/public/files/uploads/audio');
        } else {
            return cb(new Error('Invalid file type. Only audio and image files are allowed.'));
        }

        // Ensure the folder exists
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const filename_str = `${Date.now()}-${file.originalname}`;
        //        filenames.push(filename_str); // Optional: Save filenames to an array
        cb(null, filename_str);
    },
});

const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = [
            'audio/mpeg',
            'audio/wav',
            'audio/mp3',
            'image/png',
            'image/jpeg',
            'image/jpg',
            'video/mp4',
            'video/mpeg'
        ];
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only MP3, WAV, PNG, and JPEG files are allowed.'));
        }
    },
});

router.post('/audio_book_upload', upload.fields([{ name: 'audio', maxCount: 1 }, { name: 'thumbnail', maxCount: 1 }]), async (req, res) => {
    try {
        console.log("User ID from audio_book_upload: ", req.user.id);
        // Access uploaded files
        const audioFile = req.files.audio ? req.files.audio[0].filename : null;
        const audioThumbnail = req.files.thumbnail ? req.files.thumbnail[0].filename : null;

        const fetchName = await pool.query(`SELECT CONCAT(first_name, ' ', last_name) AS name FROM signup WHERE id=$1`, [req.user.id]);
        const name_of_user = fetchName.rows[0].name;

        // Access title and description from form data
        const { audioTitle, audioDesc } = req.body;

        if (!audioFile || !audioThumbnail) {
            return res.status(400).send('Audio and thumbnail are required.');
        }

        // Log the file names (with the timestamp)
        console.log('Uploaded audio file:', audioFile);
        console.log('Uploaded thumbnail file:', audioThumbnail);

        // Insert into the database
        const response = await pool.query(
            `INSERT INTO audiobook (user_id, audio_book_title, thumb_path, audio_path, audiobook_description, name_of_user) VALUES ($1, $2, $3, $4, $5, $6)`,
            [req.user.id, audioTitle, audioThumbnail, audioFile, audioDesc, name_of_user]
        );

        console.log("Success: ", response.rowCount > 0);

        res.status(200).send('Uploaded successfully!');
    } catch (error) {
        console.error('Error uploading audio book:', error);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/edit_subtitles', ensureAuthenticated, async (req, res) => {
    const { bookTitle } = req.query;
    const response = await pool.query("SELECT audio_path FROM audiobook WHERE audio_book_title=$1", [bookTitle]);

    const audioFilePath = "http://localhost:3000/uploads/audio/" + response.rows[0].audio_path;
    res.render('audioSubtitleEditor', { audioFileName: bookTitle, audioFilePath: audioFilePath });
});

// Route: Save subtitles
router.post('/save-subtitles', async (req, res) => {
    const { subtitles, bookTitle } = req.body;

    if (!subtitles || subtitles.length === 0) {
        return res.status(400).json({ error: 'No subtitles provided.' });
    }

    // Save subtitles to a file or database (example: JSON file)
    const subtitleFilePath = path.join(path.resolve(__dirname, '..'), `/public/files/uploads/subtitles`, `${bookTitle}.json`);
    fs.writeFile(subtitleFilePath, JSON.stringify(subtitles, null, 2), (err) => {
        if (err) {
            console.error('Error saving subtitles:', err);
            return res.status(500).json({ error: 'Failed to save subtitles.' });
        }
    });

    const response = await pool.query(`
        UPDATE audiobook
        SET subtitles_path = $1
        WHERE audio_book_title = $2
        RETURNING *
    `, [`${bookTitle}.json`, bookTitle]);

    if (response.rowCount > 0)
        res.json({ message: 'Subtitles saved Successfully!', subtitleFilePath });
    else
        res.json({ message: 'Subtitles not Saved Successfully!', subtitleFilePath });
});

router.get("/audio_player", async (req, res) => {
    const response = await pool.query("SELECT audio_path, subtitles_path FROM audiobook WHERE audio_book_title=$1", [req.query.bookTitle]);

    if (response.rowCount > 0) {
        res.render(`audioplayer`, {
            filename: `${response.rows[0].audio_path}`,
            subtitles_path: `${response.rows[0].subtitles_path}`
        });
    } else {
        res.json("No such file exists");
    }
})

//For updating after submitting
router.get("/fetch_after_upload", ensureAuthenticated, async (req, res) => {
    console.log("req.query.bookTitle: ", req.query.bookTitle);
    const response = await pool.query("SELECT * FROM audiobook WHERE audio_book_title=$1", [req.query.bookTitle]);


    if (response.rowCount > 0) {
        res.json(response.rows);
    } else {
        res.json([
            {
                no_books_found: true
            }
        ]);
    }
});

//For fetching on initialization
router.get("/audiobooks", ensureAuthenticated, async (req, res) => {
    const response = await pool.query("SELECT * FROM audiobook WHERE user_id=$1 AND subtitles_path IS NULL", [req.user.id]);

    if (response.rowCount > 0) {
        res.json(response.rows);
    } else {
        res.json([
            {
                no_books_found: true
            }
        ]);
    }
});

const videoUpload = require('../custom_modules/processVideo');

router.post("/video_upload", videoUpload.upload.fields([
    { name: 'videoFile', maxCount: 1 },
    { name: 'videoThumbnail', maxCount: 1 }
]), async (req, res, next) => {
    await videoUpload.processVideo(req, res);  // Ensure it completes before moving on
    return next();
}, async (req, res) => {
    const { videoTitle, videoDescription, videoCategory } = req.body;

    // Access uploaded files
    const dirPath = "/uploads/video";
    const videoPath = req.files.videoFile ? (`${dirPath}/${videoTitle}/segments/index.m3u8`) : null;
    const videoThumbnail = req.files.videoThumbnail ? (`${dirPath}/${videoTitle}/videoThumbnail.jpg`) : null;
    const videoMP4 = req.files.videoFile ? (`${dirPath}/${videoTitle}/${videoTitle}.mp4`) : null;

    // if (!req.file.videoFile[0] || !req.file.videoThumbnail[0]) {
    //     return res.status(400).send('Audio and thumbnail are required.');
    // }

    const fetchName = await pool.query(`SELECT CONCAT(first_name, ' ', last_name) AS name FROM signup WHERE id=$1`, [req.user.id]);
    const name_of_user = fetchName.rows[0].name;

    // Insert into the database
    const response = await pool.query(
        `INSERT INTO videos (
            user_id, 
            video_title, 
            video_thumbnail, 
            video_path, 
            video_description, 
            video_mp4_path, 
            category, 
            name_of_user) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
        [req.user.id, videoTitle, videoThumbnail, videoPath, videoDescription, videoMP4, videoCategory, name_of_user]
    );

    if (response.rowCount > 0) {
        res.status(200).send('Uploaded successfully!');
    } else {
        res.status(500).send("Database Error");
    }
});

router.get('/videoplayer', async (req, res) => {
    const requestedVideo = req.query.videoTitle;

    const response = await pool.query("SELECT * FROM videos WHERE video_title=$1", [requestedVideo])

    res.render("videoplayer", {
        videomp4src: response.rows[0].video_mp4_path,
        video_thumbnail_src: response.rows[0].video_thumbnail,
        video_title: response.rows[0].video_title,
        subtitles_path: null
    });
});

//Defining some Middleware
// Route to generate profile picture
router.get("/profile-pic", ensureAuthenticated, (req, res) => {
    const letter = req.query.letter || "A"; // Default letter is "A"
    const canvas = generateProfilePic(letter);

    // Send the image as a response
    res.setHeader("Content-Type", "image/png");
    canvas.createPNGStream().pipe(res);
});

router.post('/deleteNote', async (req, res) => {
    const { note_id } = req.body;

    if (note_id >= 0) {
        pool.query(`UPDATE notes
            SET note_content = remove_array_element_by_index(note_content, $1),
                note_color = remove_array_element_by_index(note_color, $1)
            WHERE user_id = $2
            RETURNING *;`, [note_id, 1]);
    }
});

module.exports = router;