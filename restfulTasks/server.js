var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(express.static(path.join(__dirname,'client','dist','client')));
app.use(bodyParser.json());

app.listen(8000, ()=>{
    console.log("on port 8000");
});
