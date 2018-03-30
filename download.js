const Tesseract = require('tesseract.js')
const request = require('request');
const fs = require('fs');
const url = 'http://tesseract.projectnaptha.com/img/eng_bw.png';
const filename = 'pic.png';

const writeFileStream = fs.createWriteStream(filename)

request(url).pipe(writeFileStream).on('close', function() {
  console.log(url, 'saved to', filename)
})