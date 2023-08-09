require('dotenv').config();

let Server = require('./models/server.js');

let server = new Server();

server.listen();