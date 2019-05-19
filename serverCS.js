const express = require('express');
// const expressstatic = require('express-static');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');


var server = express();
server.listen(8080);

//产生key的函数
var array = [];
for(var i = 0; i < 100000; i++) {
    //push函数
    array.push('sin_' + Math.random(i));
}
console.log(array);
//密钥
var secret = 'wy';
//拦截cookie信息，传入解密时候用的secret
server.use(cookieParser(secret));
//session的简单使用
server.use(cookieSession({
    name : 'sess',
    //key越长，越安全
    keys :array,
    //seesion的有效期 -- 99年
    maxAge : 99 * 365 * 24 * 3600 * 1000
}));

//cookie
// server.use('/', function(request, response) {
//     //往前端发一个cookie
//     request.secret = 'wy';
// 	//signed:开启签名功能，name,value,option
//     response.cookie('user', 'cookie3', {path: '/aaa', maxAge:30 * 1000 * 3600,signed:true});
//     //读取一个cookie信息
//     console.log('未签名的cookie:' , request.cookies);
//     console.log('已签名的cookie' , request.signedCookies);

//     //删除cookie
//     response.clearCookie('user');

//     response.send('ok');
//     response.end();
// });

//session
server.use('/aaa', function(request, response) {
    if (request.session['count'] == null) {
        request.session['count'] = 1;
    } else {
        request.session['count'] ++;
    }
    console.log(request.session['count']);
    response.send('ok');
});




