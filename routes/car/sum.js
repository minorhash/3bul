var express = require('express');
var router = express.Router();
var par,sku,pri,uni
var sess,ite,sob,sar=[],clr,num,skua
var sum

var getSes=function(req, res, next) {
sess=req.session
if(sess){
sar=sess.sar
sum=sess.sum=sar[0].pri*sar[0].uni
    // for(var i=0;i<sar.length;i++){
// sum.push(sar[i].pri*sar[i]*uni)
    // }

}else{console.log("=== no sess")}
next()}

var chk=function(req, res) {
console.log("== put sum")
console.log(sar)
console.log(sess)
}

router.put('/sum',[getSes,chk] );
module.exports = router;
