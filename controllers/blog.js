const http = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};

module.exports.blog = function (req, res) {
  const pathAPI = '/api/blog';
  const requestOptions = {
    url: apiOptions.server + pathAPI,
    method: 'GET',
    json: {}
  };

  http(requestOptions, function (error, response, body) {
    if (error) {
      console.log(error);
    }
    console.log("telo "+JSON.stringify(body));
    res.render('pages/blog', Object.assign({}, body));
  });
}