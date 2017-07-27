var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mysql = require('mysql');

var routeMW = require("./middleware/route.mw.js");

var clientPath = path.join(__dirname, '../client');

var cookieParser = require("cookie-parser");

// var configurePassport = require("../server/passport.js");

var purchasesProc = require("./procedures/products.proc");
var productsProc = require("./procedures/purchases.proc");
var api = require('./api');
// var utils = require('../client/utils.js');
var prerender = require('prerender-node');

var liveServer = require("live-server");
var params = {
	port: 3000, // Set the server port. Defaults to 3000.
	host: "localhost", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
	root: "/Volumes/Internal External HD/Covalence/Group Project 3/styleshop/client", // Set root directory that's being served. Defaults to cwd.
	open: false, // When false, it won't load your browser by default.
	ignore: 'scss,my/templates', // comma-separated string for paths to ignore
	file: "index.html", // When set, serve this file for every 404 (useful for single-page applications)
	wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
	mount: [['/components', './node_modules']], // Mount a directory to a route.
	logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
	middleware: [function(req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};


// prerender.set('prerenderServiceUrl', 'http://localhost:1337/');
// prerender.set('prerenderToken', 'Y2ljUX08lEV2mHIMOnxu');
var app = express();
// app.use(app.router);
// routes.initialize(app);
// app.use(express.static(clientPath));
app.use(bodyParser.json());
app.use(cookieParser());





app.use('/api', api);

app.get("*", function (req, res, next) {
    if (routeMW.isAsset(req.url)) {
        next();
    } else {
        res.sendFile(path.join(__dirname, "../client/index.html"));
    }
})
liveServer.start(params); //this is for liveserver
// app.listen(3000);