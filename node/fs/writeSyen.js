let fs = require("fs");
let url = require("http");

let server = url.createServer(function(req, res){
    if(req.url=="/"){
        let error = fs.writeFileSync('demoSync.html',"hello bangladesh");

        if(error){
            res.writeHead(200,{'content-Type': 'text/html'})
            res.write("file write fail")
            res.end();
        }
    
        else{
            res.writeHead(200,{'content-Type': 'text/html'})
            res.write("file write done")
            res.end();
        }

    }
});

server.listen(5050);
console.log("Start");