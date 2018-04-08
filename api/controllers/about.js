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
    .findOne()
    .then(
      item => {
        if (!item) {
          sendObj = Object.assign({}, sendObj, { skills: [] });
        } else {
          sendObj = Object.assign({}, sendObj, { skills: item.data });
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

module.exports.setSkills = function(req, res) {
  // создаем новую запись блога и передаем в нее поля из формы
  const Model = mongoose.model('about');
  // меняем запись в базе
  Model.update(
    {},
    { data: req.body },
    (err, item) => {
      if (err)
        return res.status(400).json({ message: err.message, error: err });
        
      return res.status(201).json({ status: 'Все изменения сохранены' });
    }
    // err => {
    //   // обрабатываем  и отправляем
    //   res.status(404).json({
    //     status: 'При добавление записи произошла ошибка: ' + err
    //   });
    // }
  );
};
