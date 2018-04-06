const config = require('../config.json');
const http = require('request');
const apiOptions = {
  server: 'http://localhost:3000'
};

module.exports.about = function(req, res) {
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
    console.log(body);
    res.render('pages/about', Object.assign({}, sendObj, body));
  });
};
