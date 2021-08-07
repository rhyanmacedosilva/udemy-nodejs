let express = require('express');
let consign = require('consign');
const { check, validationResult } = require('express-validator');

let srv = express();
srv.set('view engine', 'ejs');
srv.set('view options', { delimiter: '?' })
srv.set('views', './app/views');

srv.use(express.urlencoded());
srv.use(express.json());

consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .into(srv, { check, validationResult });

module.exports = srv;