const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../public'));
app.use('/style', express.static(__dirname + '/../style'));
app.use('/assets', express.static(__dirname + '/../assets'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.join(__dirname + '/../public/index.html')));
});

server.listen(port);
