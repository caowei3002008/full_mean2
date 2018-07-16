const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname,"client","dist","client")));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
})

// app.use(restify.CORS({
//     headers: ['content-range']
// }));

require("./server/config/mongoose.js");
let routes_setter = require("./server/config/routes.js");
routes_setter(app);

app.listen(8000, ()=>{
    console.log("Running on 8000");
})