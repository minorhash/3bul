var express = require('express');
var router = express.Router();
var db= require("cardb")
var adb=require("usrdb")
var par=null,email=null,usr=null,sku=null
var sess=null,pid=null,pal=null

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

const getEma = (req, res, next)=> {
if(req.session){
sess=req.session
usr=sess.usr
if(usr){
email=usr.email
}else{usr=null
    console.log("no usr")}
}else{    console.log("no sess")}
next()};

var chk=function(req, res, next) {
    console.log(par)
    next()}

var cb=function(req, res) {
var obj={ par:par,usr:usr}
res.render('log',obj);}

var arr=[getPar,getEma,chk,cb]
router.get('/log-:id',arr);
module.exports = router;
