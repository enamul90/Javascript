let url = require("http");

let server = url.createServer(function(req, res){
    if(req.url=="/"){
        res.writeHead(200,{'content-Type': 'text/html'})
        res.write('<h1>this is code hone</h1>')
        res.end();
    }

    else if(req.url=="/about"){
        res.writeHead(200,{'content-Type': 'text/html'})
        res.write('<h1>this is code about</h1>')
        res.end();
    }

    else if(req.url=="/contact"){
        res.writeHead(200,{'content-Type': 'text/html'})
        res.write('<h1>this is code by contact</h1>')
        res.end();

    }
});

server.listen(5051);
console.log("Start");