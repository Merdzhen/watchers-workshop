const { Admin } = require('../db/models');

const adminName = (req, res, next) => {
  res.locals.admin = req.session?.admin;
  // res.locals.superuser (название "superuser" из header.hbs), req.session?.superuser (название "superuser" из superuserRoutes.js)
  next();
};

const sessionLogger = (req, res, next) => {
  console.log('ЛОГГЕР СЕССИЙ', req.session);
  next();
};

module.exports = {
  adminName, sessionLogger,
};
