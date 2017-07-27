var db = require("../db");

exports.all =function () {
    return db.rows("getAllProducts", []);

}
exports.single =function () {
    return db.row("getSingleProduct", [id]);
}
exports.misc =function () {
    return db.rows("getMisc", []);
}
exports.apparel =function () {
    return db.rows("getApparel", []);
}