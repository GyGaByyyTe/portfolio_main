const nodemailer = require('nodemailer');
const http = require('request');
const config = require('../config/config.json');

const apiServer = config.server.path;

module.exports.works = function(req, res) {
  const pathApi = config.server.work;
  const requestOptions = {
    url: apiServer + pathApi,
    method: 'GET',
    json: {}
  };
  const sendObj = {
    msg: req.flash('message')
  };
  http(requestOptions, function(error, response, body) {
    res.render('pages/works', Object.assign({}, sendObj, body));
  });
};

module.exports.sendEmail = function(req, res) {
  // требуем наличия имени, обратной почты и текста
  if (!req.body.name || !req.body.email || !req.body.text) {
    //если что-либо не указано - сообщаем об этом
    return res.redirect('/?msg=Все поля нужно заполнить!');
  }
  // инициализируем модуль для отправки писем и указываем данные из конфига
  const transporter = nodemailer.createTransport(config.mail.smtp);
  const mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: config.mail.smtp.auth.user,
    subject: config.mail.subject,
    text:
      req.body.text.trim().slice(0, 500) +
      `\n Отправлено с: <${req.body.email}>`
  };
  // отправляем почту
  transporter.sendMail(mailOptions, function(error, info) {
    //если есть ошибки при отправке - сообщаем об этом
    // if (error) {
    //   return res.redirect(
    //     '/?msg=При отправке письма произошла ошибка: ' + error
    //   );
    // }
    res.redirect('/?msg=Письмо успешно отправлено(нет)');
  });
};
