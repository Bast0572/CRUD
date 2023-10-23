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

const db = new sqlite3.Database('project_db')

db.serialize(()=>{
    db.run(`create table if not exists Teams
    (
        id INTEGER PRIMARY KEY,
        name TEXT
    )`)
})

db.serialize(()=> {
    db.run(`create table if not exists Users 
        (id INTEGER PRIMARY KEY,
        name TEXT,
        pwd TEXT,
        email TEXT,
        created DATE,
        updated DATE || null,
        admin BOOL,
        team INTEGER,
        FOREIGN KEY(team) REFERENCES Teams(id)
        )`
        )
})

db.serialize(()=> {
    db.run(`create table if not exists User_Team(
        user_id INTEGER,
        team_id INTEGER,
        PRIMARY KEY (user_id,team_id),
        FOREIGN KEY (user_id) REFERENCES Users(id),
        FOREIGN KEY (team_id) REFERENCES Teams(id)
    )`
    )
})

