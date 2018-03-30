const Tesseract = require('tesseract.js');
// const request = require('request');
// const fs = require('fs');
// const url = 'http://d2jaiao3zdxbzm.cloudfront.net/wp-content/uploads/figure-65.png';
const filename = require('path').resolve(__dirname, 'pic.png');
const options = {
  langPath: path.join(__dirname, "langs") // Or wherever your downloaded langs are stored
};

// const writeFile = fs.createWriteStream(filename);

Tesseract.recognize(filename, { lang: path.resolve(__dirname, 'langs/3.02/spa') })
  .then((res) => {
    console.log(res); 
  })
  .catch(err => console.log(err))
  .finally(e => {
    console.log('finally');
    process.exit();
  })

// request(url).pipe(writeFile).on('close', function() {
//   console.log(url, 'saved to', filename);
//   Tesseract.recognize(filename)
//     .then(data => {
//         console.log('then\n', data.text)
//     })
//     .catch(err => {
//       console.log('catch\n', err);
//     })
//     .finally(e => {
//       console.log('finally\n');
//       process.exit();
//     });
// });

