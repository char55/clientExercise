var https = require('https');

function getAndPrintHTML (options) {
// options, which is an object that contains values for the host and path
// console.log(options)
// var host = options.host;
// var path = options.path;
var stream = '';


  https.get(options, function(reply) {
    reply.setEncoding('utf8');

    reply.on('data', function(data) {
      stream += data;
      console.log(stream)
    });
    reply.on('end', function(data) {
      console.log('END OF STREAM');
    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};
getAndPrintHTML(requestOptions);