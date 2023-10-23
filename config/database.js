/*

express

Variable d'envirronement
dotenv

SQLite package
sqlite3

Chiffrer 
js-sha256





*/

const sqlite3 =require("sqlite3").verbose();

const db

db.serialize(()=> {
    db.run('create table if not exists users (
        id INTEGER PRIMARY KEY,
        name TEXT 
        )
})

