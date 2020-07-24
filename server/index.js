const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(cors()).use(express.urlencoded({extended: 'false'})).use(express.json()).use(routes);

app.get('/', function (req, res) {
    res.send('hello world')
});


app.listen(4000, ()=>{
    console.log("Server is ready at http://localhost:4000");
});