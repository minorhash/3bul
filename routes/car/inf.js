var express = require('express');
var router = express.Router();
var par=null,usr=null,sess=null,email=null

var getPar=function(req,res,next){
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

var chk=function(req,res,next){
    console.log(par)
    console.log(usr)
    next()}

var cb=function(req, res, next) {
var obj={ title: par,par:par,usr:usr }
res.render('info',obj );}
var arr=[getPar,getEma,chk,cb]
router.get('/info-:id',arr);
module.exports = router;
