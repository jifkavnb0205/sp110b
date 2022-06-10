var socket = a.socket;

socket.on('connect', (skt) => {
	console.log(skt);
});

// 監聽到用戶連接所傳送的消息，並在聊天室顯示"某使用者"進入聊天室的訊息
socket.on('user conncet', (data) => {
	var str = data + '進入聊天室';   // data --> 遊客+用戶id
	// ↓在聊天室插入某使用者連接的訊息
	a.$content.innerHTML += '<div class="list text-center">\
								<div class="info">'+ str +'</div>\
							</div>';
	a.scroll();
});

// 監聽到用戶段開連接所傳送的消息，並在聊天室顯示"某使用者"離開聊天室的訊息
socket.on('user disconnect', (data) => { // data --> "遊客"+此用戶id
	var str = data + '離開聊天室';
	// ↓在聊天室插入某使用者離開的訊息
	a.$content.innerHTML += '<div class="list text-center">\
								<div class="info">'+ str +'</div>\
							</div>';
	a.scroll();
});

//接收消息 //其他客戶端訊息 --> 傳送至server --> 傳送至此客戶端
socket.on('server message', (data) => { //data --> 其他用戶傳送的訊息內容
	console.log(data);
	// ↓在聊天室插入其他使用者發出的訊息
	a.$content.innerHTML += '<div class="list">\
								<p class="user-name text-left">'+ data.author +'</p>\
								<div class="section">'+ data.text +'</div>\
							</div>';
	a.scroll();
});

//使用者斷開連接通知
socket.on('disconnect', (data) => {
	console.log('server disconnect: ' + JSON.stringify(data));
});

a.$sendBtn.onclick = a.sendMsg.bind(a);
