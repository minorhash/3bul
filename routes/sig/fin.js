var express = require('express');
var router = express.Router();
var adb=require("usrdb")
var par,email,name,pss,usr
var mailusr,sess,boo

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

const getEma = (req, res, next)=> {
if(req.body){
email = req.body.email
if(email){
mailusr = adb.mailUsr(email);

if(mailusr){
console.log("=== taken")
boo=0
}else{
try{adb.insUsr(req.body.name,req.body.pss,email)}
catch(err){console.log(err);
boo=0
}
}//if mailusr
}else{console.log("=== no email")}
}else{console.log("=== no body")}

next()};

var logOut=function(req, res, next) {
    if(req.query.out=="yes"){
sess.usr=null
    }else{console.log("no out");}
    next()}

var chk=function(req, res, next) {
    console.log(par)
    console.log(mailusr)
    console.log(sess)
    console.log(usr)
    next()}

var cb=function(req, res) {
var obj={ par:par,usr:usr,boo:boo}
res.render('sign',obj)}
router.post('/sign-:id',[getPar,getEma,logOut,chk,cb] );
module.exports = router;
