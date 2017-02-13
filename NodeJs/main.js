// var events = require('events');

// var eventEmitter = new events.EventEmitter();

// const connectHandler = connected = () => {
// 	console.log('connect is done!');

// 	eventEmitter.emit('data_received');
// }

// eventEmitter.on('connection', connectHandler);

// eventEmitter.on('data_received', () => {
// 	console.log('数据接收成功。');
// });


// eventEmitter.emit('connection');

// console.log('程序执行完毕！');


// 第二个例子

// var fs = require('fs');


// fs.readFile('input.txt', (err, data) => {
// 	if (err) {
// 		console.log(err.stack);
// 		return;
// 	}
// 	console.log(data.toString());
// });


// console.log('process is done!');

// 第三个例子

let EventEmitter = require('events').EventEmitter;

let event = new EventEmitter();

const listener = () => {
	console.log('监听器listender执行');
}

event.addListener('connection', listener);

let eventListenerMount = EventEmitter.listenerCount(event, 'connection');
console.log(eventListenerMount + '个监听器正在监听连接事件！');


event.emit('connection');

event.removeListener('connection', listener);
console.log('监听器移除');

// BUFFER

// let buf = new Buffer(20);

// let len1 = buf.write('www.baidu.com');

// let len2 = buf;

// console.log('the length is :', len2);

// for (let i = 0; i < 10; i++) {
// 	buf[i] = i + 97;
// }

// console.log(buf.toString('utf-8', 0, 12))

// console.log(buf.toJSON());

// console.log(buf.length)






































