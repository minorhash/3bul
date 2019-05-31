var express = require('express');
var router = express.Router();
var db=require("cardb")
var par,sku,skumer,pri,uni,rsku,rset
var sess,ite,sob,sar=[],clr,skua,ind
var sum,red

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

var getSku=function(req, res, next) {
rsku=req.query.rsku
rset=req.query.rset

sess=req.session
    skua=[]
if(sess){
sar=sess.sar
if(sar){
    for (var i=0;i<sar.length;i++){
skua.push(sar[i].sku)
    }

ind=    skua.indexOf(rsku)
    if(ind>-1){
    sar[ind].sku=rsku
    sar[ind].uni=rset
}else{console.log("=== no ind")}

}else{console.log("=== no sar")}
}else{console.log("=== no sess")}

next()}

/// get sum
var getSum=function(req, res, next) {
if(sar){
console.log("==sar")
    sum=[]
    for(var i=0;i<sar.length;i++){
sum.push(sar[i].pri*sar[i].uni)
    }

red=sum.reduce(function(total, num){ return total + num });

}else{console.log("==no sar")}
    next()}

var clrSes=function(req, res, next) {
if(req.query){
clr=req.query.clr
if(clr=="yes"){
req.session=null
    res.redirect("cart")
//sar=""
}else{sar=sess.sar}
}
next()}//clr ses

var chk=function(req, res, next) {
    console.log("== cart")
    console.log(red)
    next()}

var cb=function(req, res ) {
res.render('cart',{ par:par,sku:sku,mer:skumer,sar:sar,sum:red});
}

router.get('/cart',[getPar,getSku,getSum,clrSes,chk,cb] );
module.exports = router;
