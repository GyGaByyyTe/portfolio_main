const express = require('express');
const router = express.Router();

const ctrlBlog = require('../controllers/blog');
const ctrlAvatar = require('../controllers/avatar');
const ctrlAbout = require('../controllers/about');
const ctrlWork = require('../controllers/work');

var isAuthenticated = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({message: 'Unauthorized', error: 401})
};

router.get('/about', ctrlAbout.getSkills); // READ
router.post('/about', isAuthenticated, ctrlAbout.setSkills); // READ

router.get('/blog', ctrlBlog.getArticles); // READ
router.post('/blog', isAuthenticated, ctrlBlog.createArticle); // CREATE
// router.put('/blog/:id', ctrlBlog.editArticle); // EDIT
// router.delete('/blog/:id', ctrlBlog.deleteArticle); // DELETE

router.get('/avatar', ctrlAvatar.getAvatar);

router.get('/work', ctrlWork.getSlider);
router.post('/work', ctrlWork.setSlide);

router.get('*', (req, res) => {
  res.status(404).json({msg: 'Not found', err: 404});
})

module.exports = router;