const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    },
    path: '/socket.io',
})



// app.get('/', function (req, res) {
//     res.send('Hello World')
// })

// app.get('/hi', function (req, res) {
//     res.send('Hello World2')
// })

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.emit('hello', 'server hello');

    socket.on('disconnect', () => {
        console.log('연결 해제 ')
    })
})

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
    console.log(process.env.NODE_ENV)
})

