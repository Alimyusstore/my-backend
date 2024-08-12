let express = require('express');
let app = express();
let PORT = 8081

app.get('/', function(req, res) {
    res.send("Hello World");
})

let server = app.listen(PORT, function() {
    let host = server.address().address;
    let port = server.address().port;

    console.log("Example app listening at http://%s%s", host, port);
});