const mongoose = require('mongoose');
const config = require('../../config/config.json');

module.exports.getSlider = function(req, res) {
  const avatar = {
    name: 'Лебедев Андрей',
    picture: '/images/userfiles/avatars/ava_index.jpg'
  };
  const slide = {
    name: 'САЙТ ШКОЛЫ ОНЛАЙН ОБРАЗОВАНИЯ',
    tech: 'HTML , CSS, JAVASCRIPT',
    picture: '/images/userfiles/slider/work_1.png'
  };

  let sendObj = {};

  const picture = mongoose.model('pic');
  const work = mongoose.model('work');
  work
    .find()
    .then(items => {
      if (!items.length) {
        sendObj = Object.assign({}, sendObj, { slides: [slide] });
        // res.status(200).json(avatar);
      } else {
        sendObj = Object.assign({}, sendObj, { slides: items });
        // res.status(200).json(item);
      }
      return sendObj;
    })
    .then(temp => {
      picture.findOne().then(
        item => {
          if (!item) {
            sendObj = Object.assign({}, temp, { picture: avatar });
            res.status(200).json(sendObj);
          } else {
            sendObj = Object.assign({}, temp, { picture: item });
            res.status(200).json(sendObj);
          }
        },
        err => {
          sendObj = Object.assign({}, temp, {
            message: err.message,
            error: err
          });
          res.status(200).json(sendObj);
        }
      );
    });
};

module.exports.setSlide = function(req, res) {
  if (req.get('secure') === config.server.secure) {
    const Model = mongoose.model('work');
    const item = new Model({
      name: req.body.name,
      tech: req.body.tech,
      picture: req.body.picture
    });
    item
      .save()
      .then(
        pic => res.status(201).json(pic),
        e => res.status(400).json({ message: e.message, error: e })
      );
  } else {
    res.status(401).json({ message: 'Unauthorized', error: 401 });
  }
};
