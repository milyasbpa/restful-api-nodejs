const mysql = require('mysql');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'restapinodejs'
});

db.connect( err => {
    if (err) throw err;
    console.log('Mysql is connected..')
});

module.exports = db;