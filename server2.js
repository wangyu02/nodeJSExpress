const express = require('express');
const expressStatic = require('express-static');
const querystring = require('querystring');

var server = express();
server.listen(8080);

//定义前后台的接口程序：
//已经存在的用户数据
var users = {
    'blue' : '12345',
    'zhansan' : '123456',
    'lisi' : '1234567'
};

server.get('/login', function(request, response) {
    var userName = request.query['name'];
    var passWord = request.query['password'];
    //判断是否输入用户名或者密码
    if(userName == null || passWord == null) {
        response.send({"ok":false, "msg":"请输入用户密码"});
        return;
    }
    //校验用户名密码是否正确
    if (users[userName] == null) {
        response.send({"ok":false, "msg":"此用户不存在"});
    } else {
        if(users[userName] != passWord) {
            response.send({"ok":false, "msg":"密码错误"});
        } else {
            response.send({"ok":true, "msg":"成功"});
        }
    }
    response.end();
});

//告诉expressStatic去www文件夹中读取静态文件
server.use(expressStatic('./www'));