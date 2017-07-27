var express = require('express');
var purchaseCtrl = require("./controllers/purchases.ctrl");
var productCtrl = require("./controllers/products.ctrl");
var contact = require('./controllers/email.ctrl');
var donations = require('./controllers/donations.ctrl');
// var prerender = require('prerender-node');
var router = express.Router();

router.use('/purchases', purchaseCtrl);
router.use('/products', productCtrl);
router.use('/contact', contact);
router.use('/donations', donations);
// app.use(prerender);
module.exports = router;
