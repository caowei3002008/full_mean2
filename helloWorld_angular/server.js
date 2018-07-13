var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'client', 'dist','client')));

app.listen(8000, ()=>{
    console.log("On 8000");
});