const express = require('express');

const app = express();
const port = 8080;

app.use(express.static('client'));
app.set('view engine', 'ejs');

import serverRender from './render';

app.get('/', (req, res) => {
    res.render('index', {
        content: serverRender()
    });
});

app.listen(port, () => console.log('Server is running on port ' + port));
