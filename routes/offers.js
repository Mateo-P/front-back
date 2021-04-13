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
router.get('/post',jsonParser, function (req, res, next) {
    console.log(req.query)
    let name=req.query.name
    let city=req.query.city
    let company=req.query.company
    let salary=req.query.salary

    Mongolib.getDatabase(db => {
        if(req.body){
            Mongolib.createOffer(db,{name,city,company,salary})
        }
        
    })
    res.sendStatus(200);
});

module.exports = router;