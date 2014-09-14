var express = require('express');
var router = express.Router();

/* lista de seriados  */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('seriados');
    collection.find({},{},function(e,docs){
        res.render('seriados', {
            "seriados" : docs
        });
    });
});
 
module.exports = router;
