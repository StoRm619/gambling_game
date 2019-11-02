const express = require("express");
const app = express();
const port = 3500;
const http = require("http").createServer();

const io = require("socket.io")(http);



io.of("/chat").on("connection", (socket) => {
    socket.on("newMsg", (data) => {
        confirm.log(`new message received from the user: ${data.username}: ${data.msg}`)

        socket.broadcast.emit("newMessage",  data)
    })
})


http.listen(port, () => {
    console.log("server is listing on localhost:" + port);
})