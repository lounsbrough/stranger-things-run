const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');

const port = 7241;

const io = new Server(server, {
    cors: {
        origin: [
            "http://localhost:3000",
            "https://codenough.com",
            "https://lounsbrough.com"
        ],
        credentials: true
    }
});

const letterStates = 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => ({
    letter,
    on: false
}));

io.on('connection', (socket) => {
    console.log('client connected');

    socket.on('join-room', (roomId) => {
        console.log(`joined room ${roomId}`);

        socket.join(roomId);
    });

    socket.on('light-state-change', (letterStateChange) => {
        console.log(letterStateChange);

        letterStates.find((letterState) => letterState.letter === letterStateChange.letter).on = letterStateChange.on;

        console.log(socket.rooms);

        socket.rooms.forEach(roomId => {
            socket.to(roomId).emit('letter-state-change', letterStates);
        });
    });
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
