const express=require('express');
const app=express();

app.get('/getData',(req,res)=>{
    res.json({
        "statusCode":"200",
        "statusMesaage":"success"
    })
})


app.listen(5000,(req,res)=>{
    console.log("expres api is running at 5000");
})