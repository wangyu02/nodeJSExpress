const queryString = require('querystring');

module.exports = {
    aaa : function() {
        //下面这个函数才是真正需要执行的函数
        return function(request, response, next) {
            var str = '';
            //接收post请求的数据
            request.on('data', function(data) {
                str += data;
            });
            request.on('end', function() {
                request.body = queryString.parse(str);
                next();
            });
        };
    }
};