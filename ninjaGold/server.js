var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(path.join(__dirname,'client','dist','client')));
app.use(bodyParser.json());

require('./server/config/mongoose.js');
let routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000);