require('dotenv').config();
const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'views')));
app.use(cookieParser());
app.use(helmet());
app.use(router);

app.set('port', process.env.PORT || 3333);
module.exports = app;
