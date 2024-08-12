let express = require('express');
let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/api/user", require("./routers/api/user"))
app.listen(3000, ()=> {
    console.log("Server listening on port 3000");
})