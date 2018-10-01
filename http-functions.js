
module.exports = function getHTML (options, callback) {
var https = require('https');
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
};