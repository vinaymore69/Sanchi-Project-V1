const path = require('path');

module.exports = {
  entry: './public/files/src/videoplayer.js',
  output: {
    filename: 'videoplayer.js',
    path: path.join(__dirname, 'public', 'files', 'dist'),
  },
};