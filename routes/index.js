var express = require('express');
var router = express.Router();
var db=require("cardb")
var adb=require("usrdb")
var par,mer
var mailusr,usr,sess
var cred=require("./js/cred.js")

var getPar=function(req, res, next) {
    par=req.params.id
    next()}

const getEma = (req, res, next)=> {
if(req.session ){
sess=req.session
}else{console.log("no req")}
next()};

var getIte=function(req, res, next) {
    mer=db.allMer()
    next()}
var ua=null,hea=null,acc=null
var chk=function(req, res, next) {
    ua=req.acceptsLanguages("en")
    hea=req.headers
    acc=req.header("user-agent")
    console.log(ua)
    console.log(acc)
    next()}

var cb=function(req, res, next) {
    var obj={ mer:mer,usr:sess.usr}
    res.render('index',obj);}//cb
var arr=[getEma,getIte,chk,cb];
router.get('/',arr)
module.exports = router;
