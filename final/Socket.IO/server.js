var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io')(server),
	port = process.env.PORT || 8000;   //監聽的阜號

app.use(express.static(__dirname + '/client'));

io.on('connection', (socket) => {     // connection --> 表示客戶端已經成功連接伺服器，並接收socket參數
	//console.log('a user connected，id: ' + socket.id);

	let user = '游客' + socket.id.substring(0, 6); //建立用戶名
	
	io.emit('user conncet', user + '進入聊天室');  // 發送有使用者進入聊天室的消息以及進入聊天室的使用者用戶名

	socket.on('client message', (data, cb) => {   // 收到使用者發出訊息的消息以及使用者發出訊息內容
		console.log(data);
		cb('recieved');
		data.author = user;

		socket.broadcast.emit('server message', data);  // broadcast --> 廣播給所有客戶端使用者，但不包括自己
	});

	//通知用戶離開
	socket.on('disconnect', () => {     // 收到客戶端disconnect的消息，並向客戶端發送user disconnect的消息，以及是哪位使用者
		console.log('user disconnected');
		io.emit('user disconnect', user + '離開聊天室');// 發送有使用者離開聊天室的消息以及離開聊天室的使用者用戶名
	});

	// io.clients((err, clients) => {
	// 	if (!err) console.log(clients);
	// });
});

server.listen(port, () => {     //server監聽port 
	console.log('listening on %d...', port);
});
