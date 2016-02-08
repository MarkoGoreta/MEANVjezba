var express = require('express');
var stylus = require('stylus');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

module.exports = function (app, config) {

    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

    app.use(express.static(config.rootPath + '/public'));     // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                     // log every request to the console
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));   // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());   // parse application/json
    app.use(session({
        secret: "aaa",
        resave: false,
        saveUninitialized: false
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));
    app.use(express.static(config.rootPath + '/public'));
};