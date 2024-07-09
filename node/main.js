let url = require("http");

let server = url.createServer(function(req, res){
    res.end("hello World")
});

server.listen(5050);
console.log("Start");