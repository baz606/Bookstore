const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

app.use(express.static('client'));
app.set('view engine', 'ejs');

import serverRender from './render';
import apiRouter from './apiRouter';

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.render('index.ejs', {
        content: serverRender()
    });
});

app.listen(port, () => console.log('Server is running on port ' + port));
