const express = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');

const port = 7241;

app.options('*', cors());

const io = new Server(server, {
    cors: {
        origin: [
            "http://localhost:3000",
            "http://localhost:7241",
            "https://codenough.com",
            "https://lounsbrough.com"
        ],
        credentials: true,
        methods: ["GET", "POST", "OPTIONS"]
    }
});

const roomLetterStates = {};

const getInitialLetterStates = () => 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => ({
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

        console.log(socket.rooms);

        socket.rooms.forEach(roomId => {
            if (!roomLetterStates[roomId]) {
                roomLetterStates[roomId] = getInitialLetterStates();
            }

            roomLetterStates[roomId].find((letterState) => letterState.letter === letterStateChange.letter).on = letterStateChange.on;

            socket.to(roomId).emit('letter-state-change', roomLetterStates[roomId]);
        });
    });
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});