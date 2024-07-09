let fs = require("fs");
let url = require("http");

let server = url.createServer(function(req, res){
    if(req.url=="/"){
        fs.exists('demo.html', function(error){
            if(error){
                res.end("file exists");
            }

            else{
                res.end("file don't exists");
            }
        });
    }
});

server.listen(5050);
console.log("Start");