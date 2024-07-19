const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');

const port = 7241;

const corsConfig = {
    origin: [
        'https://codenough.com'
    ]
};

if (process.env.LOCAL_RUN) {
    console.log('Local run, allowing all CORS origins');
    corsConfig.origin = '*';
}

const io = new Server(server, {
    cors: corsConfig
});

const roomLetterStates = {};

const getInitialLetterStates = () => 'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => ({
    letter,
    on: false
}));

const joinRoomMessageId = 'join-room';
const letterStateChangeMessageId = 'letter-state-change';

const setupJoinRoomMessageHandler = (socket) => {
    socket.on(joinRoomMessageId, (roomId, callback) => {
        const uppercaseRoomId = roomId.toUpperCase();

        socket.join(uppercaseRoomId);

        if (!roomLetterStates[uppercaseRoomId]) {
            roomLetterStates[uppercaseRoomId] = getInitialLetterStates();
        }

        callback(roomLetterStates[uppercaseRoomId]);
    });
};

const setupLetterStateChangeMessageHandler = (socket) => {
    socket.on(letterStateChangeMessageId, (letterStateChange) => {
        console.log(letterStateChange);

        socket.rooms.forEach(roomId => {
            if (!roomLetterStates[roomId]) {
                roomLetterStates[roomId] = getInitialLetterStates();
            }

            roomLetterStates[roomId].find((letterState) => letterState.letter === letterStateChange.letter).on = letterStateChange.on;

            socket.to(roomId).emit(letterStateChangeMessageId, roomLetterStates[roomId]);
        });
    });
};

io.on('connection', (socket) => {
    setupJoinRoomMessageHandler(socket);
    setupLetterStateChangeMessageHandler(socket);
});

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});
