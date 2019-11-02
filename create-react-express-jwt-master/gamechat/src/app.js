const io = require("socket.io-client");

let chat = io.connect("http://localhost:3500/chat")

const username = "ElRafa"


function sendMessage() {
    //get the inout
    let input = document .getElementById("chat-input")
    let msg = input.value;

    input.value =  "";

    chat.emit("newMsg",{username, msg})
}

function addMessage(container, data) {
    let elm = document.createElement("p");

    elm.textContent = `${data.username} : ${data.msg}`;

    container.appendChild(elm);
}

chat.on("newMessage", (data) => {
    console.log("New Message : ", data.username, data.msg)
    let container = document.getElementById(`container`)
    addMessage(container, data)
})

//submit button
const btn = document.getElementById("submitBtn")

btn.onclick = () => {
    sendMessage()
}
