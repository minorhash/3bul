var express = require('express');
var router = express.Router();
var db= require("cardb")
var adb=require("usrdb")
var email=null,usr=null,sku=null
var sess=null
var fav=[],fav2=[],fav3=[],fav4=[]
var fst=null,fst2=null,niq=null
var mer=[],mer2=[]

const getEma = (req, res, next)=> {
if(req.session){
sess=req.session
usr=sess.usr
if(usr){
email=usr.email
}else{   usr=null;    console.log("no usr")}
}else{    console.log("no sess")}
next()};

var getFav=function(req, res, next) {
console.log("=== get fav")
try{fst=adb.selFav(email)}
catch(err){console.log(err)}

if(fst){
fav=JSON.parse(fst)
fav2=fav.filter(Boolean)
if(req.query){
console.log("=== get fav")

if(req.query.sku!=null){
fav2.push(req.query.sku)
}else{console.log("sku null")}

fav3= [...new Set(fav2)]
fav4=fav3.filter(Boolean)
fst2=JSON.stringify(fav4)

try{adb.setFav(fst2,email)}
catch(err){console.log(err)}

}else{console.log("== no que")}

}else{
console.log("== no fst")
if(req.query){
if(req.query.sku!=null){
fav2.push(req.query.sku)
}else{console.log("sku null")}

fav3= [...new Set(fav2)]
fav4=fav3.filter(Boolean)
fst2=JSON.stringify(fav4)

try{adb.setFav(fst2,email)}
catch(err){console.log(err)}

}else{console.log("== no que")}

}//no fst

next()}

var getMer=function(req, res, next) {
if(fav3){
    //mer=[]
for(var i=0;i<fav3.length;i++){
console.log(fav3[i])
mer[i]=(db.skuMer(fav3[i]))
mer2= [...new Set(mer)]

}//for
}else{console.log("==no fav3")}

next()}

var chk=function(req, res, next) {
    console.log("== fav chk")
    console.log(req.query.sku)
    console.log(fav)
    console.log(fst)
    console.log(fst2)
    console.log(mer)
    next()}

var cb=function(req, res) {
var obj={ usr:usr,niq:fav3,mer:mer}
res.render('favorite',obj);}

var arr=[getEma,getFav,getMer,chk,cb]
router.get('/favorite',arr);
module.exports = router;
