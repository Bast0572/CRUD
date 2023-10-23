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

const db = new sqlite3.Database('project.db')

db.serialize(()=>{
    db.run(`create table if not exists Teams
    (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL UNIQUE
    )`)
})

db.serialize(()=> {
    db.run(`create table if not exists Users 
        (id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        pwd TEXT NOT NULL,
        email TEXT NOT NULL,
        created DATE NOT NULL,
        updated DATE,
        admin BOOL NOT NULL,
        team INTEGER,
        FOREIGN KEY(team) REFERENCES Teams(id)
        )`
        )
})

db.serialize(()=> {
    db.run(`create table if not exists User_Team(
        user_id INTEGER NOT NULL,
        team_id INTEGER NOT NULL,
        PRIMARY KEY (user_id,team_id),
        FOREIGN KEY (user_id) REFERENCES Users(id),
        FOREIGN KEY (team_id) REFERENCES Teams(id)
    )`
    )
})

module.exports = db;