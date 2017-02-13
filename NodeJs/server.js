let net = require('net');

let server = net.createServer((socket) => {
	socket.on('data', (data) => {
		socket.write('hi');
	});
	socket.on('end', () => {
		console.log('connect is lost');
	});
	socket.write('welcome to NodeJs Study \n');
});

server.listen(8000, () => {
	console.log('server bound');
});





