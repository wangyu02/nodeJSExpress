const express = require('express');
// const expressStatic = require('express-static');
const bodyparser = require('body-parser');

const server = express();
server.listen(8080);

// //Get请求的处理
// server.use('/login', function(request, response) {
//     var userName = request.query['name'];
//     var passWord = request.query['password'];

//     if(userName == null || passWord == null) {
//         response.send({"ok":false, "msg" : "请输入用户名或者密码"});
//         return;
//     }

//     console.log(request.query);
// });

//Post请求的处理 -- 需要借助中间件完成(body-parser)
server.use(bodyparser.urlencoded({
    extended:true,  //扩展模式
    limit:50*1024   //限制post请求的大小，默认数值为100k
}));

//next是链式操作关键词
server.use('/', function(request, response, next) {
    console.log('a');  //Post请求

    next()
});

server.use('/', function(request, response) {
    console.log('b');
})

