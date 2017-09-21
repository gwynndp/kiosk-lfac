var express = require('express');
var cors = require('cors');
var parse = require('body-parser');
var path = require('path');

// import express from express;
// import cors from cors;
// import parse from body-parser;

var app = express();

app.use(cors());
app.use(parse.json());
app.use(express.static('dist')); // should make the whole dist directory serve static files
// app.use(express.static(path.join(__dirname, 'app'))); // should serve app directory as static files
// console.log('join __dirname', path.join(__dirname, 'app'));
// console.log('express.static', app.use(express.static('dist')));

// TO CHECK WHERE THIS FILE IS IN THE DIRECTORIES
// console.log('This file is ' + __filename);
// console.log("It's located in " + __dirname);

// app.use('/', (req, res) => {
//   res.send('This is my first route'); //WORKS PERFECTLY
//   //res.sendFile(path.join(__dirname, 'index.html')); // finds the file but tries to interpret the html as js and doesn't import the node_modules
// });

app.listen('3100', function() {
  console.log('App is listening on port 3100!');
});
