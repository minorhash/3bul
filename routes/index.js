var express = require('express');
var router = express.Router();
var db=require("cardb")
var mer
var sess

const getSes = (req, res, next)=> {
if(req.session ){
sess=req.session
}else{console.log("no req")}
next()};

var getIte=function(req, res, next) {
    mer=db.allMer()
    next()}
var chk=function(req, res, next) {
    console.log(ses)
    next()}

var cb=function(req, res ) {
if(sess){
    var obj={ mer:mer,usr:sess.usr}
}else{
    var obj={ mer:mer,usr:"none"}
}
    res.render('index',obj);}//cb
var arr=[getSes,getIte,chk,cb];
router.get('/',arr)
module.exports = router;
