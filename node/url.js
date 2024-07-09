
let url = require("http");
let address = require("url");

let server = url.createServer(function(req, res){
    let myURL = "http://rabbil.com/blog.html?year=2020&month=july;";
    let myURLObj = address.parse(myURL, true);
    let hostNome = myURLObj.host;
    let hostPath = myURLObj.pathname;
    let hostSearch = myURLObj.search;

    res.writeHead(200,{'content-Type': 'text/html'})
    res.write(hostPath);
    res.end();
    
});

server.listen(5053);
console.log("Start");