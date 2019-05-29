var express = require('express');
var router = express.Router();
var db=require("cardb")
var par,mer

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

var getIte=function(req, res, next) {
    mer=db.allMer()
    next()}

var chk=function(req, res, next) {
    console.log(mer[0])
    next()}

var cb=function(req, res, next) {
    res.render('index',
        { mer:mer

        });
}
router.get('/', [getIte,chk,
cb]);

module.exports = router;
