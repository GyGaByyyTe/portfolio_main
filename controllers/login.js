const mongoose = require('mongoose');
const passport = require('passport');
const http = require('request');
const config = require('../config/config.json');

const apiServer = config.server.path;

module.exports.login = function(req, res) {
  // if (req.isAuthenticated()) {
  //   return res.redirect('/admin');
  // }
  const pathApi = config.server.avatar;
  const requestOptions = {
    url: apiServer + pathApi,
    method: 'GET',
    json: {}
  };
  const sendObj = {
    msg: req.flash('message')
  };
  http(requestOptions, function(error, response, body) {
    res.render('pages/login', Object.assign({}, sendObj, body));
  });
};

module.exports.auth = function(req, res, next) {
  passport.authenticate('loginUsers', (err, user) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      req.flash('message', ' укажите правильный логин и пароль!');
      return res.redirect('/');
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/admin');
    });
  })(req, res, next);
};
