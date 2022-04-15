const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mail.ru',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'projects-edu@bk.ru',
    pass: 'J0zzqZggLX93eAe1jSHL',
  },
}, {
  from: 'Watchers Admin <projects-edu@bk.ru>',
});

const mailer = (message) => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log('mailer err ====>', err);
    console.log('Email sent: ', info);
  });
};

module.exports = mailer;
