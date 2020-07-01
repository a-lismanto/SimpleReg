'use strict';

exports.ok = function(values, res) {
  var data = {
      'status': 200,
      'result': values
  };
  res.json(data);
  res.end();
};

exports.fail = function(message, res, statusCode = 403) {
    var data = {
        'status': statusCode,
        'message': message
    };
    res.status(statusCode)
    res.json(data);
    res.end();
  };