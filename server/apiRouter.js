const express = require('express');
const pg = require('pg');

//postgres://ihhcrpadlvhspt:b9605f87b178246f588943ee418a3b1432a33831533dee7dbbd1b2f90127acff@ec2-23-23-226-190.compute-1.amazonaws.com:5432/dfe14rc8ahsnn8

const pool = new pg.Pool({
    user: 'ihhcrpadlvhspt',
    database: 'dfe14rc8ahsnn8',
    password: 'b9605f87b178246f588943ee418a3b1432a33831533dee7dbbd1b2f90127acff',
    host: 'ec2-23-23-226-190.compute-1.amazonaws.com',
    port: 5432,
    ssl: true
});

const router  = express.Router();

router.get('/books', (req, res) => {
    pool.query('SELECT * FROM books', [], function (err, result) {
        if(err) throw err;

        res.send(result.rows);
    });
});

router.get('/books/:bookId/ratings', (req, res) => {
    pool.query('SELECT * FROM reviews WHERE book_id = $1', [req.params.bookId], function (err, result) {
        if(err) throw err;

        res.send(result.rows);
    });
});

export default router;
