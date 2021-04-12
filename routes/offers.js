var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const Mongolib = require("../db/Mongolib");
/* GET home page. */
router.get('/', function (req, res, next) {
    Mongolib.getDatabase(db => {
        Mongolib.findDocuments(db, docs => {
            res.send(docs);
        })
    })
});

/* POST offer. */
router.post('/post',jsonParser, function (req, res, next) {
    console.log(req.headers)
    console.log(req.body)
    Mongolib.getDatabase(db => {
        if(req.body){
            Mongolib.createOffer(db, req.body.offer)
        }
        
    })
    res.sendStatus(200);
});

module.exports = router;