var express = require('express');
var router = express.Router();
var db=require("cardb")
var par,sku,skumer,pri,uni
var sess,ite,sob,sar=[],clr

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

var getSku=function(req, res, next) {
sess=req.session
if(sess){
sar=sess.sar
}else{
console.log("=== no sar")
}

next()}

var posRed=function(req, res, next) {
res.redirect("cart")
next()}

var posSku=function(req, res, next) {
sku=req.body.sku
uni=req.body.uni
skumer=db.skuMer(sku)

sess=req.session
//sar=[]
if(req.body){
    ite={sku:"",pri:"",uni:"",name:""}
    ite.name=skumer.name
    ite.sku=sku
    ite.pri=skumer.pri

    if(!req.body.reset){
    ite.uni=uni
    }

if(sess.sar){
sar=sess.sar
sar.push(ite)
sess.sar=sar
}else{
console.log("=== no sar")
sar=sess.sar=[]
}
res.redirect("cart")
}else{
req.session=null
sar=null
console.log("no sku")}
next()}//pos sku

var upUni=function(req, res, next) {
    if(sess){
    sar=sess.sar
if(req.body.reset){
ite.uni=req.body.reset
}else{console.log("no sku")}
}else{console.log("no sess")}

next()}//up uni

var clrSes=function(req, res, next) {
if(req.query){
clr=req.query.clr
if(clr=="yes"){
req.session=null
sar=""
}else{sar=sess.sar}
}
next()}//clr ses

var chk=function(req, res, next) {
    console.log("== cart")
    console.log(sku)
    console.log(clr)
    console.log(sar)
    next()}

var cb=function(req, res ) {
res.render('cart',
{ par:par,
sku:sku,mer:skumer,
sar:sar
});
}

router.get('/cart',[getPar,getSku,clrSes,
chk,cb,posRed] );
router.post('/cart',[getPar,posSku,clrSes,
chk,cb] );

module.exports = router;
