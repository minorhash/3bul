// === pal=============================
var paypal = require("paypal-rest-sdk")
var pal = require("mypal")
var mypal = pal.myPal()
// === glob =============================
var usr=null
var par=null,sess=null,sar=null
var buy=null, ite=null,sub=null
var cnf=require("../son/pal.json")
paypal.configure({
  mode: cnf.sand,
  client_id:cnf.tid,
  client_secret:cnf.tsc
});
var tran=mypal.transactions[0]
var pal=null

var senEma=function(email,pal,ua){

var fin=""

paypal.payment.get(pal, function (err, pay) {
    if (err) {
        console.log(err);
        throw err;
    } else {
        console.log("Get Payment Response");
        console.log(pay.transactions[0].amount.total);
        ite=pay.transactions[0].item_list.items;

        console.log(typeof ite[0].price)
for (var i=0;i< ite.length;i++){
    fin+="タイトル:"+ite[i].name+"<br>sku:tms-"+ite[i].sku
        +"<br>price:"+Number(ite[i].price).toLocaleString()+" yen"
        +"<br>unit:"+ite[i].quantity+"<br>"
}

var i18=null
if(ua=="ja"){
i18=require("../son.ja.json")
} else {
i18=require("../son/en.json")
}

sub=i18.buy

var pre=
i18.lin1
+i18.cau1+"<br>"
+i18.lin1+"<br>"
+"nobody"+"様<br><br>"
+i18.cau2+"<br><br>"
+i18.cau3
+i18.cau4+"<br>"

+i18.cont+"<br>"
+i18.pid+":"+pal+"<br><br>"

var mes=pre+fin
console.log(mes)

var snde = require('snd-ema');
if(pal){
snde.trEma(email,sub,mes);
}else{console.log("no pid")}
}
});


}//obj

module.exports=senEma
