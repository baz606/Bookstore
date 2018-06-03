const express = require('express');
const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    database: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432
});

const router  = express.Router();

router.get('/books', (req, res) => {
    pool.query('SELECT * FROM books', [], function (err, result) {
        if(err) throw err;

        res.send(result.rows);
    });
});

export default router;
