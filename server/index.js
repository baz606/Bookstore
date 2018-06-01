const http = require('http');
const express = require('express');
const reload = require('reload');

const app = express();

app.use(express.static('client'));
app.set('view engine', 'ejs');

import serverRender from './render';

app.get('/', (req, res) => {
    res.render('index', {
        content: serverRender()
    });
});

app.listen(8080, () => console.log('Server is running'));
