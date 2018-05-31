const http = require('http');
const express = require('express');
const reload = require('reload');

const app = express();

app.use(express.static('client'));

reload(app);

app.listen(8080);
