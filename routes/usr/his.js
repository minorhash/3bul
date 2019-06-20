var express = require('express');
var router = express.Router();
var adb=require("usrdb")
let par=null,email=null,usr=null
let mailusr=null
var sess=null,pid=null,pal=null,rid=null

const getSes = (req, res, next)=> {
    if(req.session){
    sess=req.session
    if(sess.usr){
        usr=sess.usr
        email=sess.usr.email
}else{console.log("no sess")}

}else{console.log("no email")}
next()};

const getPid= (req, res, next)=> {
if(email){
pid=adb.allPid(email)
}else{
pid=null
console.log("no email")}
next()};

const getPal= (req, res, next)=> {
if(email){
pal=adb.allPal(email)
}else{
pal=null
console.log("no email")}
next()};

const getRid= (req, res, next)=> {
if(email){
rid=adb.allRid(email)
}else{
rid=null
console.log("no email")}
next()};

var chk=function(req, res, next) {
    console.log(email)
    console.log(usr)
    next()}

var cb=function(req, res) {
var obj={ par:par,usr:usr,pid:pid,pal:pal,rid:rid}
res.render('history',obj);}
router.get('/history',[getSes,getPid,getPal,getRid,chk,cb] );
module.exports = router;
