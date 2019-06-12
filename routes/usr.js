var express = require('express');
var router = express.Router();
var adb=require("usrdb")
let par="",email=""
let mailusr=null,sess=null
const cred=require("./js/cred.js")

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

const getEma = (req, res, next)=> {
sess=req.session
if(sess ){
sess.usr=mailusr
}else{console.log("no mailusr")}
next()};

const posEma = (req, res, next)=> {
sess=req.session
if(req.body){
email= cred.ema(req);
mailusr=adb.mailUsr(email)
sess.usr=mailusr

}else{
   sess.usr=null
    console.log("already log")}
next()};

const getUsr = function(req, res, next) {
if (sess.usr) {
usr = sess.usr.name;
} else {
usr = null;
console.log("no usr");
}
next()};

var chk=function(req, res, next) {
    console.log(par)
    console.log(email)
    console.log(mailusr)
    console.log("=== sess")
    console.log(sess)
    next()}

var cb=function(req, res) {
var obj={ par:par,usr:sess.usr}
res.render('usr',obj);
}
router.get( '/usr-:id',[getPar,getEma,chk,cb] );
router.post('/usr-:id',[getPar,posEma,chk,cb] );
module.exports = router;
