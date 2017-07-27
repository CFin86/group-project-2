var express = require('express');

var purchaseProc = require("../procedures/purchases.proc.js")

var router = express.Router();

router.route('/')

    .get(function (req, res) {
        purchaseProc.all().then(function (data) {
            res.send(data);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        });
    })

module.exports = router;