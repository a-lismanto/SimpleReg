var express = require('express'),
    app = express(),
    port = process.env.PORT || 3006,
    bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
}
app.use(allowCrossDomain);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.disable('etag');

var routes = require('./routes');
routes(app);

app.listen(port);
console.log('RESTful API server started on: ' + port);