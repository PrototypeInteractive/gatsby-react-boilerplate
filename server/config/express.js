'use strict';
var debug = require('debug')('api');

var express = require('express');
var serveStatic = require('serve-static');
var compression = require('compression');
var helmet = require('helmet');
var auth = require('basic-auth');


module.exports = function(app) {

  app.use(helmet({
    hsts: false,
    noSniff: false
  }));

  app.use(compression());

  if (process.env.NODE_ENV !== 'production') {
    var username = process.env.AUTH_USER || 'prototype';
    var password = process.env.AUTH_PASS || 'prototype';
    app.use(function(req, res, next) {
      var user = auth(req);
      if (user === undefined || user['name'] !== username || user['pass'] !== password) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="prototype"');
        res.end('Unauthorized');
      } else {
        next();
      }
    });
  }

  app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (process.env.NODE_ENV !== 'production') {
      res.setHeader('X-Robots-Tag', "noindex, nofollow");
    }

    next();
  });

  app.get('/robots.txt', function(req, res, next) {
    if (process.env.NODE_ENV !== 'production') {
      res.end();
    } else {
      next();
    }
  });

  app.use(serveStatic('public', {
    'index': ['index.html'],
    'dotfiles': 'ignore',
    'maxAge': process.env.NODE_ENV !== 'production' ? '0d' : '7d',
    'setHeaders': setCustomCacheControl
  }));

  app.get('*', function(req, res) {
    res.status(404).end();
  });

  debug('--------------------------');
  debug('☕️ ');
  debug('Starting Server');
  debug('Environment: ' + process.env.NODE_ENV);

  function setCustomCacheControl(res, path) {
    if (serveStatic.mime.lookup(path) === 'text/html') {
      res.setHeader('Cache-Control', 'public, max-age=0')
    }
  }
}
