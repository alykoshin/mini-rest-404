'use strict';

var AppError = require('mini-rest-errors').AppError;
var HTTPError = require('mini-rest-errors').HTTPError;


// All pages returns 404 (excluding already handled routes)

module.exports = function(config) {
  return function(req, res, next) {

    var msg =
          'protocol: \''    + req.protocol    + '\', ' +
          'method: \''      + req.method      + '\', ' +
          'hostname: \''    + req.hostname    + '\', ' +
          'originalUrl: \'' + req.originalUrl + '\', ' +
          'remote ip: \''   + req.ip;
    var err = new AppError('pageNotFound', msg);
    //var err = new HTTPError(404, req.originalUrl);
    //var err = new Error('404 Page Not Found: ' + req.originalUrl);

    next(err);

  };
};


