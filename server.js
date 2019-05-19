const express = require('express');

//获取到express对象了
var server = express();
//下面函数中的request和response并不是原生的request和response函数，而是经过express封装过的，上面添加了一些功能。
server.get('/', function (request, response) {
    //原生：向前端返回消息使用write函数,Express框架中，就需要使用send函数完成这个功能了,send函数的功能更加强大
    var url = request.url;
    console.log(url);
    response.send({"name":"wangyu82", "id":123});
    response.end();
});

server.post('/', function(request, reponse) {
    console.log('POST require');
})

server.use('/b.html', function(request, response) {
    response.send('abcd');
    response.end();
});

server.listen(8080);