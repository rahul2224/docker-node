var express=require('express');
var app=express();
app.get('/',(req,res)=>{
    res.send("hi docker");
});
app.listen(8081,()=>{
    console.log("server is running");
});