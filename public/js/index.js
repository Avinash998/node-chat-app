var socket = io();

socket.on('connect', function () {
	console.log('Connected to server');

	socket.emit('createMessage',{
		from: 'Avinash',
		text: 'Hey. This is Avinash.'
	});
});

socket.on('disconnect', function () {
	console.log('Disconnected to server');
});

socket.on('newMessage', function (message) {
	console.log("New Message ", message);
});