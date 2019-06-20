var express = require('express');
var router = express.Router();
var db= require("cardb")
var adb=require("usrdb")
var par=null,email=null,usr=null,sku=null
var sess=null,pid=null,pal=null
var fav=null,mer=null,fst=null,fst2=null,niq=null

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

const getEma = (req, res, next)=> {
if(req.session){
sess=req.session
usr=sess.usr
if(usr){
email=usr.email
}else{
   usr=null
    console.log("no usr")}
}else{
    usr=null
    console.log("no sess")}
next()};

const getPid= (req, res, next)=> {
if(email){
pid=adb.allPid(email)
}else{
pid=null
console.log("no email")}
next()};


var chk=function(req, res, next) {
    console.log(par)
    next()}

var cb=function(req, res) {
var obj={ par:par,usr:usr}
res.render('mypage',obj);}

var arr=[getPar,getEma,chk,cb]
router.get('/mypage',arr);
module.exports = router;
