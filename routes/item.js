var express = require('express');
var router = express.Router();
var db=require("cardb")
var par,sku,x,skumer,allmer

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

var getAll=function(req, res, next) {
    allmer=db.allMer()
    next()}

var getSku=function(req, res, next) {
sku=req.query.sku
skumer=db.skuMer(sku)
    x=req.query.x
    next()}

var chk=function(req, res, next) {
    console.log(par)
    console.log(sku)
    console.log(skumer)
    next()}

var cb=function(req, res ) {
res.render('item',
{ par:par,
sku:sku,allmer:allmer,mer:skumer
});
}
router.get('/item:id',[getAll,getPar,getSku,
chk,cb] );

module.exports = router;
