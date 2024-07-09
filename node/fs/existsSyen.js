let fs = require("fs");
let url = require("http");

let server = url.createServer(function(req, res){
    if(req.url=="/"){
        let error = fs.existsSync('demo.html');

        if(error){
            res.writeHead(200,{'content-Type': 'text/html'})
            res.write("file exist true")
            res.end();
        }
    
        else{
            res.writeHead(200,{'content-Type': 'text/html'})
            res.write("file exist false")
            res.end();
        }

    }
});

server.listen(5050);
console.log("Start");