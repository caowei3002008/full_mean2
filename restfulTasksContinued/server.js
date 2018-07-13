var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');

app.use(express.static(path.join(__dirname,'client','dist','client')));
app.use(bodyParser.json());
app.listen(8000);