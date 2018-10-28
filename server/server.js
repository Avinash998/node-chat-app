const path = require('path');

const http = require('http');
const express = require('express');
const  socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message.js');
const publicPath = path.join(__dirname,'..','public');
const port = process.env.PORT || 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newMessage',generateMessage('Admin','Welcome to the chat app'));

	socket.broadcast.emit('newMessage',generateMessage('Admin','New user Joined'));

	socket.on('createMessage', (message, callback) => {
		io.emit('newMessage',generateMessage(message.from, message.text));
		callback();
		/*socket.broadcast.emit('newMessage',{
			from: message.from,
			text: message.text,
			createAt: new Date().getTime()
		});
*/
	});
	socket.on('createLocationMessage', (coords) => {
		io.emit('newLocationMessage', generateLocationMessage('Admin',coords.latitude,coords.longitude));
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