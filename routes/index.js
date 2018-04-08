const express = require('express');
const router = express.Router();

const ctrlAbout = require('../controllers/about');
const ctrlAdmin = require('../controllers/admin');
const ctrlBlog = require('../controllers/blog');
const ctrlLogin = require('../controllers/login');
const ctrlWorks = require('../controllers/works');

var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
};

router.get('/', ctrlLogin.login);
router.post('/login', ctrlLogin.auth);

router.get('/admin', isAuthenticated, ctrlAdmin.admin);
router.post('/admin/work', isAuthenticated, ctrlAdmin.uploadWork);

router.get('/about', ctrlAbout.about);

router.get('/blog', ctrlBlog.blog);

router.get('/works', ctrlWorks.works);
router.post('/mail', ctrlWorks.sendEmail);

module.exports = router;
