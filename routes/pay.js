var express = require('express');
var router = express.Router();
var par,sess,sar
var cnf= require('./son/aid.json');
//var pub=cnf.pub;
var pub=cnf.pkl;

var getPar=function(req, res, next) {
par=req.params.id
next()}

var getSku=function(req, res, next) {
if(req.session){
sess=req.session
sar=sess.sar
}else{ console.log("no sess")}
next()}

var chk=function(req, res, next) {
    console.log(sar)
    next()}

var cb=function(req, res ) {
var obj={par:par, sar:sar,pub:pub}
res.render('pay',obj);
}

router.get('/pay-:id',[getPar,getSku,chk,cb] );
module.exports = router;
