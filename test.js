let http = require('http');
let server = http.createServer(function(req, res){
    res.write("Hello, world!, welcome ZUlfah");
    res.end();
})   
let port = server.listen(8000);