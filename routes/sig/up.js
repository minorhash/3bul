var express = require('express');
var router = express.Router();
var adb=require("usrdb")
var par,email,usr
var mailusr,sess
var cred=require("../js/cred.js")

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

const getEma = (req, res, next)=> {
if(req.body){
email=req.body.email
mailusr = adb.mailUsr(email);
}else{console.log("== no body")}

next()};

const getUsr = function(req, res, next) {
if (sess.usr) {
usr = sess.usr.name;
    if(usr){
email=usr.email
    }

} else {
usr = null;
console.log("no usr");
}next()};

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
res.render('sign',obj);
}
router.get('/sign-:id',[getPar,getEma,logOut,chk,cb] );
module.exports = router;
