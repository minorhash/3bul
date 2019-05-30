var express = require('express');
var router = express.Router();
var par,sku,pri,uni
var sess,ite,sob,sar=[],clr,num,skua
var preu,aftu
var hea

var getSes=function(req, res, next) {
// req.query=""
sess=req.session
if(sess){
sar=sess.sar
hea=req.originalUrl

}else{console.log("=== sess")}
next()}

var getSku=function(req, res, next) {
if(req.query){
sku=req.query.sku
uni=req.query.uni
skua=[]
for(var i=0;i<sar.length;i++){
skua.push(sar[i].sku)
}
num=skua.indexOf(sku)
preu=sar[num].uni
sar[num].uni=uni
aftu=sar[num].uni

}else{console.log("=== req query")}

next()}

var chk=function(req, res) {
console.log("== put chk")
console.log(req.query)
// console.log("=== num")
// console.log(num)
// console.log(skua)
}

router.get('/cart',[getSes,chk] );
module.exports = router;
