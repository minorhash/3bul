var express = require('express');
var router = express.Router();
var db=require("cardb")
var par,sku,x,catmer

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

var getCat=function(req, res, next) {
    catmer=db.catMer(par)
    next()}

var chk=function(req, res, next) {
    console.log(par)
    console.log("==== catmer")
    next()}

var cb=function(req, res ) {
res.render('category',{ par:par,mer:catmer});
}
router.get('/category-:id',[getPar,getCat,chk,cb] );
module.exports = router;
