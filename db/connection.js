const mysql = require("mysql2");

console.log("Creating connection pool...")
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'employees_db',
    password: 'Goosegoose2020!'
})

module.exports = pool;