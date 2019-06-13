var express = require('express');
var router = express.Router();
var adb=require("usrdb")
var par,email,usr,pss
var mailusr,sess

const getEma = (req, res, next)=> {
if(req.body){
email =req.body.email
mailusr = adb.mailUsr(email);
    if(mailusr){
if(req.body.pss==mailusr.pss){
    sess=req.session
    sess.usr=mailusr
}//if
}
}else{console.log("no post")}
    //req body
next()};

const getUsr = function(req, res, next) {
if (sess) {
usr = sess.usr;
if(usr){
email=usr.email
pss=usr.pss
}

} else {
usr = null;
console.log("no usr");
}next()};

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

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
var obj={ par:par,usr:usr}
res.render('usr',obj);
}
router.post('/usr-:id',[getPar,getEma,getUsr,logOut,chk,cb] );
module.exports = router;
