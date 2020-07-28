;
'use strict'

const express = require('express'),
      morgan = require('morgan'),
      bodyParser = require('body-parser'),
      app = express(),
      usuarioRutas = require('../routes/usuario.route'),  
      path = require('path'),
      { join } = require('path'),
      cors = require('cors')             
     

app.use(morgan('dev')),

corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(bodyParser.urlencoded({ extended: false })),
app.use(bodyParser.json()),

app.use('/uploads', express.static(path.resolve('uploads')));

app.use(cors(corsOptions));
app.use(cors());

app.use('/api', usuarioRutas)

module.exports = app;
