var https = require('https');

function getHTML (options, callback) {
var stream = '';
  https.get(options, function(reply) {
    reply.setEncoding('utf8');

    reply.on('data', function(data){
      stream += data;
      callback(stream);
    });
    reply.on('end', function(data) {
      console.log('END STREAM');
    });

  });


}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML)