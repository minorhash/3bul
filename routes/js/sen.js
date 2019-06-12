var paypal = require("paypal-rest-sdk")
var par=null,sess=null,sar=null
var usr=null,sum=null,red=0,tax=0
var pal = require("mypal")
var mypal = pal.myPal()
var cnf=require("../son/pal.json")
paypal.configure({
  mode: cnf.sand,
  client_id:cnf.tid,
  client_secret:cnf.tsc
});

// === get pid=============================
// === text =============================

var email="jinjasaisen@gmail.com"
var ite="it"
// === sen=============================
var senEma=function(pid){
paypal.payment.get(pid, function (err, pay) {
    if (err) {
        console.log(err);
        throw err;
} else {
        console.log("== res");
        ite=pay.transactions[0].item_list;
var        mnt=pay.transactions[0].amount.total;
var     imnt=JSON.stringify(mnt)
var     istr=JSON.stringify(ite)
    console.log(imnt+istr)
}//else

});

// var snde = require('snd-ema');
// if(pid){
// snde.trEma(email,sub,mes);
// }else{console.log("no pid")}

}// sen ema

module.exports=senEma

