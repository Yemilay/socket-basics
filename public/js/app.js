var socket = io(); //io() is created by the library

socket.on('connect', function () {
    console.log('Connected to socket.io server!');
});
