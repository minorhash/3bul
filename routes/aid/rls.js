var express = require('express');
var router = express.Router();
// === db =============================
var adb = require('usrdb');
// === glob =============================
var email=null, pid=null
var sess=null

var cnf=require("../son/rpy.json")
var pri=cnf.pri;
var id=null,items=[],adr=null

// === fun =============================
var getEma = function(req, res, next) {
console.log('=== get Ema =======================================');
if(req.session){
sess=req.session

if(sess.usr){
email=sess.usr.email
}else{console.log("no usr")}
}else{console.log("no req")}

next()}; //getEma


var getPid= function(req, res, next) {
    if(req.body){
        id=req.body.id
        ite=JSON.stringify(req.body.items)
        adr=req.body.adr
try{
adb.insRid(email,id,ite,adr,req.body.created,req.body.updated)
}catch(err){console.log(err)}

}
console.log(ite)
next()}; //getEma

var putReq= function(req, res, next) {
var que = require('request');

var dat= 'limit=1&offset=0&payment[paid]=true'
var opt= {
    url: 'https://api.lite.checkout.rakuten.co.jp/sandbox/v1/charges',
    method: 'POST',
    body: dat,
    auth: {'user':pri}
};

function cb(err, res, body) {
if (!err && res.statusCode == 200) {
console.log(body);
}
}

que(opt, cb);

next()};

var putRls= function(req, res, next) {
console.log('=== put rls===');
var utc = new Date().toJSON().slice(0,10);

if (req.body && email) {
pid=req.body.id
    console.log(pid)

age
.get('https://api.paidy.com/payments/'+pid)
.set("Content-Type", "application/json")
.set("Paidy-Version", "2018-04-10")
.set("Authorization", "Bearer"+sec)
.then(res => {
    console.log(res)
 adb.insPid(email,pid,res.body.amount,
 JSON.stringify(res.body.buyer),
 JSON.stringify(res.body.order.items),
 utc);
})//res


} else {console.log("no pid");  }
next()};

var senEma = function(req, res, next) {
console.log('=== senEma =======================================');
    var ua=req.acceptsLanguages("en")
    var mail=require("./js/mail");
    try{mail(pid,ua)}
    catch(err){console.log(err)}
next()};

var chk = function(req,res) {
  console.log('=== chk rls =======================================');
  console.log(email);
  console.log(req.body);
};

var fun=[getEma,getPid,chk]
router.put('/rls',fun);

module.exports = router;
