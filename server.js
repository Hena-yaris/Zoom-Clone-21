const express = require("express");
const app = express();

const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidV4 } = require("uuid");


//permission
app.set("view engine", "ejs");
app.use(express.static("public"));



io.on("connection", (socket) => {
  socket.on("join-room", ()=>{
    console.log("habtsh joined");
  });
});


app.get("/", (req, res) => {
res.redirect(`/${uuidV4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

server.listen(process.env.PORT || 3000);


// app.get("/:room", (req, res) => {
//   res.render("room", { roomId: req.params.room });
// });