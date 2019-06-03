var express = require('express');
var router = express.Router();
var db=require("cardb")
var par,sku,skumer,pri
var sess,sob

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

var getSku=function(req, res, next) {
sku=req.query.sku
skumer=db.skuMer(sku)
pri=skumer.pri
    sob={sku:"",pri:"",uni:""}
    sob.sku=sku
    sob.pri=pri
    sess=req.session
    sess.sob=sob
    next()}

var chk=function(req, res, next) {
    console.log(sku)
    console.log(sess.sob)
    next()}

var cb=function(req, res ) {
res.render('cart',
{ par:par,
    sku:sku,mer:skumer,
    sob:sess.sob
});
}
router.get('/cart',[getPar,getSku,
chk,cb] );

module.exports = router;
