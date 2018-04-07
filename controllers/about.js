const config = require('../config.json');
const http = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};

module.exports.about = function(req, res) {
  const pathApi = '/api/about';
  const requestOptions = {
    url: apiOptions.server + pathApi,
    method: 'GET',
    json: {}
  };
  const sendObj = {
    msg: req.query.msg
  };
  http(requestOptions, function(error, response, body) {
    if (error) {
      console.log(error);
    }
    console.log("telo about "+JSON.stringify(body));
    res.render('pages/about', Object.assign({}, sendObj, body));
  });
};
