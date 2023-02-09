// if(process.env.DATABASE_URL !== 'production') {
  // }
require('dotenv').config()
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const routes = require('./route/router');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE_URI)
  .then(() => console.log('Connected!'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout');

app.use(expressLayouts);
app.use(express.static('public'));

app.use('/', routes)

app.listen(3000)


//LDytQoSRvmhSlinE