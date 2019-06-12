var express = require('express');
var router = express.Router();
var db= require("cardb")
var adb=require("usrdb")
let par=null,sku=0,fav=null
let skumer=null,allmer=null,mailusr=null
let usr=null,sess=null

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

var getAll=function(req, res, next) {
    allmer=db.allMer()
    next()}

const getEma = (req, res, next)=> {
if(req.session){
sess=req.session
    if(sess){
usr=sess.usr
    if(usr){
    email=usr.email
    }//usr
    }//sess
}else{
sess.usr=null
console.log("no mailusr")}
next()};

var getSku=function(req, res, next) {
sku=req.query.sku
skumer=db.skuMer(sku)
    next()}

var chk=function(req, res, next) {
    console.log("=== item")
    console.log(sku)
    console.log(skumer)
    console.log(sess)
    console.log(fav)
    next()}

var cb=function(req, res ) {
var obj={ par:par,sku:sku,allmer:allmer,mer:skumer,usr:sess.usr}
res.render('item',obj);
}
var arr=[getPar,getEma,getAll,getSku,chk,cb]
router.get('/item:id', arr);
module.exports = router;
