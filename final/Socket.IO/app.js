function App() {
	var doc = document;
	this.$input = doc.querySelector('#input');// 接收使用者所發出的訊息
	this.$content = doc.querySelector('.content');
	this.$sendBtn = doc.querySelector('.send-btn');
	this.socket = io();
}

//發送消息
App.prototype.sendMsg = function() {

	var message = this.strEscape(this.$input.value);
	if (!message) return;

	this.socket.emit('client message', { //傳送使用者發出訊息的消息至server，包含使用者發出至聊天室的訊息
		text: message,
		time: new Date()
	}, function(a) {
		//訊息發送成功
	});
	// ↓在此使用者聊天室插入自己傳送的訊息
	this.$content.innerHTML += '<div class="list">\
									<p class="user-name text-right"></p>\
									<div class="section section-self">'+ message +'</div>\
								</div>';
	this.$content.scrollTop = this.$content.scrollHeight;
	this.$input.value = '';
};

//輸入内容轉義
App.prototype.strEscape = function(str) {
	var div = document.createElement('div');// 建立div標籤
	if (div.innerText) {
		div.innerText = str;
	} else {
		div.textContent = str;//Support firefox
	}
	return div.innerHTML;
};

//滾動到底部
App.prototype.scroll = function() {
	this.$content.scrollTop = this.$content.scrollHeight;
};

window.a = new App();