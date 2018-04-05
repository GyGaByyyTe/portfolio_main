const formidable = require('formidable');
const fs = require('fs');
const path = require('path');
const http = require('request');

const apiOptions = {
  server: 'http://localhost:3000'
};

module.exports.about = function (req, res) {
  res.render('pages/about', {
  });
};