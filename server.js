
const express= require('express')
const app=express();

const server=require('http').Server(app);

app.get("/",(req,res) => {
    res.end("hi hena i comming")
})


server.listen(process.env.PORT || 3000);