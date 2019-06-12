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

var getFav=function(req, res, next) {
try{fst=adb.selFav(email)}
catch(err){console.log(err)}
if(fst){
fav=JSON.parse(fst.fav)
fav2=fav.filter(Boolean)

if(req.query){
    console.log("=== get fav")
    sku=req.query.sku
    if(sku!=null ){
   fav2.push(sku)
    }
fav3= [...new Set(fav2)]
fst2=JSON.stringify(fav3)
if(email){
console.log(email)
try{adb.setFav(fst2,email)}
catch(err){console.log(err)}
}else{console.log("no email")}
}

}else{console.log("no fav")}
next()}


var chk=function(req, res, next) {
    if(fav){
console.log(fst.fav)
console.log(fav3)
console.log(fst2)
    }
    console.log(par)
    //if(pid){    console.log(pid[0])    }
    //if(pal){    console.log(pal[0])    }
    next()}

var cb=function(req, res) {
var obj={ par:par,usr:usr,pid:pid,pal:pal,niq:fav3}
res.render('usr',obj);}

var arr=[getPar,getEma,getFav,chk,cb]
router.get('/usr-:id',arr);
module.exports = router;
