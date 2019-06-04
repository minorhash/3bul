var express = require('express');
var router = express.Router();
var adb=require("usrdb")
var par,email,usr
var mailusr=null,sess=null

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

const getEma = (req, res, next)=> {
if(req.session){
sess=req.session
usr=sess.usr
if(usr){
email=usr.email
}else{console.log("no usr")}

}else{
    usr=undefined
    console.log("no sess")}

next()};

const getHis= (req, res, next)=> {
    if(email){
his=adb.allPid(email)
    }else{
       his=null
        console.log("no email")}
next()};

var chk=function(req, res, next) {
    console.log(par)
    console.log(mailusr)
    next()}

var cb=function(req, res) {
var obj={ par:par,usr:usr,his:his}
res.render('usr',obj);
}
router.get('/usr-:id',[getPar,getEma,getHis,chk,cb] );
module.exports = router;
