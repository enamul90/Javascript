let fs = require("fs");
let url = require("http");

let server = url.createServer(function(req, res){
    if(req.url=="/"){
        fs.unlink('new.html', function(error){
            if(error){
                res.writeHead(200,{'content-Type': 'text/html'})
                res.write("file delete fail")
                res.end();
            }

            else{
                res.writeHead(200,{'content-Type': 'text/html'})
                res.write("file delete done")
                res.end();
            }
        });
    }
});

server.listen(5050);
console.log("Start");