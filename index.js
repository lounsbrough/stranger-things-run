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
            "https://codenough.com"
        ]
    }
});

const roomLetterStates = {};

const getInitialLetterStates = () => 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => ({
    letter,
    on: false
}));

io.on('connection', (socket) => {
    socket.on('join-room', (roomId, callback) => {
        const uppercaseRoomId = roomId.toUpperCase();

        socket.join(uppercaseRoomId);

        if (!roomLetterStates[uppercaseRoomId]) {
            roomLetterStates[uppercaseRoomId] = getInitialLetterStates();
        }

        callback(roomLetterStates[uppercaseRoomId]);
    });

    socket.on('letter-state-change', (letterStateChange) => {
        console.log(letterStateChange);

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
