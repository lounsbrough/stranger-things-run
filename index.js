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

const joinRoomMessageId = 'join-room';
const lightStateChangeMessageId = 'light-state-change';

io.on('connection', (socket) => {
    socket.on(joinRoomMessageId, (roomId, callback) => {
        const uppercaseRoomId = roomId.toUpperCase();

        socket.join(uppercaseRoomId);

        if (!roomLetterStates[uppercaseRoomId]) {
            roomLetterStates[uppercaseRoomId] = getInitialLetterStates();
        }

        callback(roomLetterStates[uppercaseRoomId]);
    });
    
    socket.on(lightStateChangeMessageId, (letterStateChange) => {
        console.log(letterStateChange);

        socket.rooms.forEach(roomId => {
            if (!roomLetterStates[roomId]) {
                roomLetterStates[roomId] = getInitialLetterStates();
            }

            roomLetterStates[roomId].find((letterState) => letterState.letter === letterStateChange.letter).on = letterStateChange.on;

            socket.to(roomId).emit(lightStateChangeMessageId, roomLetterStates[roomId]);
        });
    });
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
