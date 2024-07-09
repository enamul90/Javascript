let fs = require("fs");
let url = require("http");

let server = url.createServer(function(req, res){
    if(req.url=="/"){
        fs.readFile('hone.html', function(error, data){

            res.writeHead(200,{'content-Type': 'text/html'})
            res.write(data)
            res.end();
        });
    }
});

server.listen(5050);
console.log("Start");