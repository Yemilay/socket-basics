var PORT = process.env.PORT || 3000;    // This line is x Heroku
var moment = require('moment');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) { // "on" listen for events
    console.log('User connected via socket.io!');

    socket.on('message', function (message) {
        console.log('Message recived: ' + message.text);

        message.timestamp = moment().valueOf();
        io.emit('message', message);
    });

    // tiemstamp property - JavaScript timestamp (milliseconds)

    socket.emit('message', {
        name: 'System',
        text: 'Welcome to the chat application!',
        timestamp: moment().valueOf()
    });
});

http.listen(PORT, function () {
    console.log('Server started!');
});
