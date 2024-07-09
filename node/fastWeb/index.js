let fs = require("fs");
let url = require("http");

let server = url.createServer(function(req, res){
    if(req == "/"){
        let data = fs.readFileSync('home.html','utf8');
        res.end(data);
    }

    else if(req == "/contact"){
        let data = fs.readFileSync('contact.html','utf8');
        res.end(data);
    }

    else if(req == "/about"){
        let data = fs.readFileSync('about.html','utf8');
        res.end(data);
    }
});

server.listen(8080);
console.log("Start");