let fs = require("fs");
let url = require("http");

let server = url.createServer(function(req, res){
    if(req.url=="/"){
        let error= fs.renameSync('newFile.html','new.html',);
        if(error){
            res.writeHead(200,{'content-Type': 'text/html'})
            res.write("file rename fail")
            res.end();
        }

        else{
            res.writeHead(200,{'content-Type': 'text/html'})
            res.write("file rename done")
            res.end();
        }
    }
});

server.listen(8050);
console.log("Start");