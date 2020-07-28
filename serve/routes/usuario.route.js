;
'use strict'

const express = require('express');
let api = express.Router();
const users = require('../controllers/usuario.controller.js');
const storage  = require('../middlewares/multer');

api.get('/users', users.getAll);
api.post('/user', storage.single('file'), users.create);

module.exports = api;