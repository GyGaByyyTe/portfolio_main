const mongoose = require('mongoose');

module.exports.getSkills = function(req, res) {
  const avatar = {
    name: 'Лебедев Андрей',
    picture: '/images/userfiles/avatars/ava_index.jpg'
  };
  const picture = mongoose.model('pic');
  const skills = mongoose.model('about');

  let sendObj = {};
  
  skills
    .find()
    .then(
      items => {
        if (!items.length) {
          sendObj = Object.assign({}, sendObj, { skills: [] });
        } else {
          sendObj = Object.assign({}, sendObj, { skills: items });
        }

        return sendObj;
      },
      err => {
        sendObj = Object.assign({}, sendObj, {
          articles: { message: err.message, error: err }
        });
        return sendObj;
      }
    )
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
