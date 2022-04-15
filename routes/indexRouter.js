const indexRouter = require('express').Router();
const { Product } = require('../db/models');

indexRouter.get('/', async (req, res) => {
  const products = await Product.findAll({ raw: true });
  // console.log(products);
  res.render('index', { products });
});

module.exports = indexRouter;
