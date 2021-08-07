const express = require('express');
const consign = require('consign');
const { check, validationResult } = require('express-validator');

const srv = express();

srv.set('view engine', 'ejs');
srv.set('view options', { delimiter: '?' })
srv.set('views', './app/views');

srv.use(express.urlencoded({ extended: true }));
srv.use(express.json());

consign()
    .include('app/controllers')
    .then('app/models')
    .then('app/routes')
    .then('config/db.js')
    .into(srv, { check, validationResult });

module.exports = srv;