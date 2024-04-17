let socket = new WebSocket("ws://localhost:3000/ws")
socket.onmessage = (event) => { console.log("received", event.data) }
socket.send("hello from client")

let socket = new WebSocket("ws://localhost:3000/orderbookfeed")
socket.onmessage = (event) => { console.log("received", event.data) }
// socket.send("hello from client")