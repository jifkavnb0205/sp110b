# 期中專案報告:聊天室
程式碼皆修改自github專案:[https://github.com/Darylxyx/Nodejs-Examples/tree/master/Socket.IO](https://github.com/Darylxyx/Nodejs-Examples/tree/master/Socket.IO)。  

## 功能
```
發送、接收訊息  
通知用戶進入、離開聊天室  
幫進入聊天室的用戶命名，且名稱不重複
```
##  程式碼
大致上都已了解並添加註解，持續學習中。  
[app](https://github.com/jifkavnb0205/sp110b/blob/master/final/Socket.IO/app.js)  
[server](https://github.com/jifkavnb0205/sp110b/blob/master/final/Socket.IO/server.js)  
[client](https://github.com/jifkavnb0205/sp110b/blob/master/final/Socket.IO/index.js) 
## 使用SocketIO
SocketIO是基於WebSocket技術，用來實現實時雙向溝通的框架。  
WebSocket優點:  
1. 全雙工，伺服器不須等待客戶端發起請求就能發送資料。
2. 傳送的封包Header更小，減少傳送的封包大小，傳送速度更快。

## 執行
```
npm install
npm start
open loaclhost:8000
```
 
![](https://github.com/jifkavnb0205/sp110b/blob/master/final/img/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202022-06-09%20163445.png)
### 使用者1
![](https://github.com/jifkavnb0205/sp110b/blob/master/final/img/chat1.png)
### 使用者2
![](https://github.com/jifkavnb0205/sp110b/blob/master/final/img/chat2.png)
### 使用者3
![](https://github.com/jifkavnb0205/sp110b/blob/master/final/img/chst3.png)
### 使用者4
![](https://github.com/jifkavnb0205/sp110b/blob/master/final/img/chat4.png)
### 離開
![](https://github.com/jifkavnb0205/sp110b/blob/master/final/img/chat5.png)

## 參考
https://ithelp.ithome.com.tw/articles/10197142  
https://www.cnblogs.com/ghost-xyx/p/7060070.html
