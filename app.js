const express = require('express');
const app = express();
const dweetClient = require('node-dweetio');
const http = require('http').Server(app);
const io = require('socket.io')(http);

const dweetio = new dweetClient();
const SERVER_PORT = 3000;



http.listen(process.env.PORT || SERVER_PORT, () => {
  console.log(`Server started on the http://localhost:${SERVER_PORT}`);
});