const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/index')


require('./db')

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))
server.use(cors())
server.use(morgan('dev'))


server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  server.use('/', routes);

 
  
 

  
  module.exports = server

