const getSes =function (req, res, next){
if(req.session ){
sess=req.session
return sess
}else{console.log("no req")}
next()};

module.exports=getSes
