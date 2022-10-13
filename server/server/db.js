require('dotenv').config()
const pgPromise = require('pg-promise');

const pgp = pgPromise({});

const config = {
    host: 'localhost',
    port: 5433,
    database: 'postgres',
    user: 'postgres',
    password: 'Lvbnhbq1'
};

const db = pgp(config);

exports.db = db;