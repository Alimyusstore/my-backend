const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"))

app.get("/form", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    // res.sendFile(__dirname + "/style.css");

})

app.post("/formPost", (req, res) => {
    console.log(req.body);
})
app.listen(port, ()=> console.log(`Server listening on port http://localhost:${port}`))