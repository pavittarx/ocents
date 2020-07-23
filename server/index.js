const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app
    .use(cors())
    .use(cookieParser())
    .use(routes);

app.get('/', function (req, res) {
    res.send('hello world')
});


app.listen(4000, ()=>{
    console.log("Server is ready at http://localhost:4000");
});