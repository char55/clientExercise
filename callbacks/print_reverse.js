var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printUpperCase (html) {
  var reverse = html.split('').reverse().join('');
  console.log(reverse);

}

getHTML(requestOptions, printUpperCase);