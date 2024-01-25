const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server)

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/hi', function (req, res) {
    res.send('Hello World2')
})

io.on('connection', (socket) => {
    console.log('a user connected')
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

