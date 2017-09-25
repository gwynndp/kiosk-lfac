var express = require('express');
var cors = require('cors');
var parse = require('body-parser');
var path = require('path');
var fs = require('fs');

var app = express();

app.use(cors());
app.use(parse.json());
app.use(express.static('dist')); // serves the whole dist directory as static files

app.use('/jsontest', (req, res) => {
  var data = fs.readFile('./data/data.json', (err, data) => {
    if (err) throw err;
    //console.log('DATA', JSON.parse(data));
    res.json(JSON.parse(data));
  });
});

app.listen('3100', function() {
  console.log('App is listening on port 3100!');
});
