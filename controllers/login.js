const config = require('../config.json');
const http = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

module.exports.login = function(req, res) {
  const pathApi = '/api/avatar';
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: 'GET',
    json: {}
  };
  const sendObj = {
    msg: req.query.msg
  };
  http(requestOptions, function(error, response, body) {
     res.render('pages/login', Object.assign({}, sendObj, body));
  });
};

module.exports.auth = function(req, res) {
  // требуем наличия логина и пароля в теле запроса
  if (!req.body.login || !req.body.password) {
    // если не указан логин или пароль - сообщаем об этом
    return res.redirect('/login?msg=Все поля обязательны к заполнению!');
  }

  res.redirect('/admin');
};
