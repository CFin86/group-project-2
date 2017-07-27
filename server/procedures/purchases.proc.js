var db = require("../db");
exports.purchases = function() {
    return db.rows("")
}

//do I need a proc that adds a purchase?  exports.update?