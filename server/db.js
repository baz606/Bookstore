const pg = require('pg');

const pool = new pg.Pool({
    user: 'postgres',
    database: 'postgres',
    password: '1234',
    host: 'localhost',
    port: 5432
});

pool.query('SELECT * FROM books', [], function (err, result) {
    if(err) throw err;

    console.log(result.rows);
});
