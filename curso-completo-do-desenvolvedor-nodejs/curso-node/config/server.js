let express = require('express');
let consign = require('consign');

let srv = express();
srv.set('view engine', 'ejs');
srv.set('views', './app/views');

consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .into(srv);

module.exports = srv;