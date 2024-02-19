
const express= require('express')
const app=express();

const server=require('http').Server(app);
const { v4: uuidV4 } = require("uuid");


app.set("view engine", "ejs");
app.use(express.static("public"));



app.get("/", (req, res) => {
  res.redirect(`/${uuidV4()}`);
});//every time home paju simeta responsh yemihonew home pajun yzeh generat kemideregew gar and adrgachew

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});// slash blo yehone parameter kalew render yemtadergln room yemibalewn new.room mu malet degmo htmlu new egna yefeternew//:room yefelegnewn malet enchlalen 


server.listen(process.env.PORT || 3000);