var https = require('https');

function getAndPrintHTML () {
  var stream = '';
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(reply) {
    reply.setEncoding('utf8');

    reply.on('data', function(data) {
      stream += data;
      console.log(stream);
    });
    reply.on('end', function(data) {
      console.log('END OF STEAM');
    });
  });
}


getAndPrintHTML();