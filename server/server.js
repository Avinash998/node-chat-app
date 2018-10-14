const path = require('path');

const http = require('http');
const express = require('express');
const  socketIO = require('socket.io');

const publicPath = path.join(__dirname,'..','public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage',{
		from: 'Naman',
		text: 'See you then',
		createAt: 234234
	});

	socket.on('createMessage', (message) => {
		console.log('createMessage', message);
	});

	socket.on('disconnect', () => {
		console.log('New user Disconnected');
	});
});

/*io.on('reconnection', (socket) => {
	console.log('');
});*/

server.listen(port , () => {
	console.log(`Server is up on PORT : ${port}`);
});