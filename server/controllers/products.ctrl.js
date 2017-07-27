var express = require('express');

var productProc = require("../procedures/products.proc.js")

var router = express.Router();

router.route('/')

    .get(function (req, res) {
        productProc.all().then(function (data) {
            res.send(data);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        });
    })

//apparel
router.route('/apparel')
    .get(function (req, res) {
        productProc.apparel().then(function (data) {
            res.send(data);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        });
    })

//misc
router.route('/misc')
    .get(function (req, res) {
        productProc.misc().then(function (data) {
            res.send(data);
        }, function (err) {
            console.log("Error is here 34 post.ctrl.");
            console.log(err);
            res.status(500).send(err);
        })
    })
//id 

router.route('/:id')
    .get(function (req, res) {
        productProc.read(req.params.id).then(function (data) {
            res.send(data);
        }, function (err) {
            console.log("Error is here 34 post.ctrl.");
            console.log(err);
            res.status(500).send(err);
        })
    })


//checkout
module.exports = router;