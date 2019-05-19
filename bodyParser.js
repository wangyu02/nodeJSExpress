const express = require('express');
const bodyparser = require('./libs/my-body-parser');

var server = express();
server.listen(8080);

server.use('/', bodyparser.aaa());

server.use(function(request, response) {
    console.log(request.body);
});