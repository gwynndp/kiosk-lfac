const express = require('express');
const cors = require('cors');
const parse = require('body-parser');
const fs = require('fs');

const app = express();

app.use(cors());
app.use(parse.json());
app.use('/', express.static('dist'));

app.use('/jsontest', (req, res) => {
  let data = fs.readFile('./data/data.json', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.listen('3100', function() {
  console.log('App is listening on port 3100!');
});
