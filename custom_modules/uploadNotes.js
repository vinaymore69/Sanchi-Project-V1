const multer = require('multer');
const path = require('path');
const fs = require('fs');
const pdfPoppler = require("pdf-poppler");

// Video storage configuration
const digitalNotesStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const digitalNotesDir = path.join(__dirname, '..', 'public', 'files', 'uploads', 'digi_notes', req.body.categorySelect, req.body.classSelect);
    console.log(digitalNotesDir);

    if(!fs.existsSync(digitalNotesDir)) {
        fs.mkdirSync(digitalNotesDir, { recursive: true }); // Ensures parent directories exist
    }

    cb(null, digitalNotesDir);
  },
  filename: (req, file, cb) => {
      console.log(req.body.notesFileName);
      console.log(path.extname(file.originalname).toLowerCase());
      const filepath = `${req.body.notesFileName}${path.extname(file.originalname).toLowerCase()}`;
      cb(null, filepath);
  }
});


// Multer upload configuration
const upload = multer({
  storage: digitalNotesStorage,
  limits: { fileSize: 1024 * 1024 * 100 } // 100MB limit for Notes
});

module.exports = upload;