var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function(reply) {
    reply.setEncoding('utf8');

    reply.on('data', function (data) {
      console.log(data, '\nYO\n');
    });

    reply.on('end', function() {
      console.log('End of Sream.');
    });

  });


};

getAndPrintHTMLChunks();