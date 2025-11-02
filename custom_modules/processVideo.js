const multer = require('multer');
const path = require('path');
const { exec } = require('child_process');
const fs = require('fs');

// Video storage configuration
const videoStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const videoDir = path.join(__dirname, '..', 'public', 'files', 'uploads', 'video', req.body.videoTitle);
    fs.mkdirSync(videoDir, { recursive: true }); // Ensures parent directories exist

    const segmentDir = path.join(__dirname, '..', 'public', 'files', 'uploads', 'video', req.body.videoTitle, 'segments');
    fs.mkdirSync(segmentDir, { recursive: true }); // Ensures parent directories exist

    const previewImgDir = path.join(__dirname, '..', 'public', 'files', 'uploads', 'video', req.body.videoTitle, 'previewImgs');
    fs.mkdirSync(previewImgDir, { recursive: true }); // Ensures parent directories exist

    cb(null, videoDir);
  },
  filename: (req, file, cb) => {
    if (file.fieldname === 'videoFile') {
      console.log(req.body.videoTitle);
      console.log(path.extname(file.originalname).toLowerCase());
      const filepath = `${req.body.videoTitle}${path.extname(file.originalname).toLowerCase()}`;
      cb(null, filepath);
    } else if (file.fieldname === 'videoThumbnail') {
      cb(null, "videoThumbnail.jpg");
    }
  }
});

// File filter for video and thumbnail
const fileFilter = (req, file, cb) => {
  if (file.fieldname === 'videoFile') {
    const filetypes = /mp4|avi|mov|mkv/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    return extname && mimetype ? cb(null, true) : cb(new Error('Only video files are allowed!'));
  } else if (file.fieldname === 'videoThumbnail') {
    const filetypes = /jpeg|jpg|png/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    return extname && mimetype ? cb(null, true) : cb(new Error('Only image files are allowed!'));
  }
};

// Multer upload configuration
const upload = multer({
  storage: videoStorage,
  fileFilter: fileFilter,
  limits: { fileSize: 1024 * 1024 * 500 } // 500MB limit for video
});

const { promisify } = require('util');
const execPromise = promisify(exec);

// Video processing middleware
const processVideo = async (req, res) => {
  console.log("Process Videos: ", req.files);
  if (!req.files || !req.files.videoFile) return next();

  const videoPath = req.files.videoFile[0].path;
  const dirName = path.dirname(videoPath);
  const hlsPath = path.join(dirName, 'index.m3u8');

  const segmentPath = path.join(dirName, 'segments', 'segment%03d.ts');
  const previewImgPath = path.join(dirName, 'previewImgs', 'preview%d.jpg');

  // HLS Segmentation
  const hlsCommand = `ffmpeg -i "${videoPath}" -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${segmentPath}" -start_number 0 "${hlsPath}"`;

  // Preview Images
  const previewCommand = `ffmpeg -i "${videoPath}" -vf fps=1/10,scale=120:-1 "${previewImgPath}"`;

  

  await execPromise(hlsCommand);
  await execPromise(previewCommand);

  console.log("Returning...");
};

module.exports = { upload, processVideo };