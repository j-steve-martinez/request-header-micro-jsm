'use strict';

// var ClickHandler = require(process.cwd() + '/app/controllers/clickHandler.server.js');

module.exports = function (app, db) {
   app.enable('trust proxy');

   app.route('/')
      .get(function (req, res) {
         res.sendFile(process.cwd() + '/public/index.html');
      });

  app.route('/:info')
      .get(function (req, res) {
        // create default return object
        var headerObj = { "ip": null, "language": null, "os": null };

        if (req.headers) {
          var ip = req.ip || req.connection.remoteAddress;
          //parse out colon if necessary
          if (ip.indexOf(':') !== -1) {
            ip = ip.split(':')[3];
          }

          var language = req.headers['accept-language'].split(',')[0];
          var os = req.headers['user-agent'];
          var start = os.indexOf('(');
          var end = os.indexOf(')');
          var subStr = os.slice(start + 1, end);

          headerObj.ip = ip;
          headerObj.language = language;
          headerObj.os = subStr;

        }

        res.send(headerObj);

      });

};
