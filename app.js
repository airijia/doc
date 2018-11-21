'use strict';

const path = require('path');

const AV = require('leanengine');
const Koa = require('koa');
const statics = require('koa-static');
const cors = require('koa2-cors');

const app = new Koa();

app.use(cors());
app.use(statics(path.join(__dirname, 'public')));

app.use(AV.koa());

module.exports = app;
