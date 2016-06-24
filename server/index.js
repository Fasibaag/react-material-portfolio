const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

const server = http.createServer(app);

app.use(express.static(__dirname + '/../public'));
app.use('/style', express.static(__dirname + '/../style'));
app.use('/assets', express.static(__dirname + '/../assets'));

app.get('*', (req, res) => {
  console.log(path.resolve(path.join(__dirname + '/../public/index.html')));
  res.sendFile(path.resolve(path.join(__dirname + '/../public/index.html')));
});


server.listen(3000);
