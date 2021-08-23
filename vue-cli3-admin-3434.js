//引入express中间件
var express = require('express');
var app = express();

//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static('./'));

// 监听端口为3000
var server = app.listen(3434, function() {
  console.info('http://localhost:3434');
});
