
// on récupère 'express'
const express = require("express")

// on déclare une application express
const app =express()

// on récupère la configuration du projet et la base de données
const config =require("./config/config")()
const db =require("./config/database")

// on précise sur quel port le serveur écoute
process.env.PORT = config.port


// le serveur écoute
app.listen(process.env.PORT,() =>{
    console.log('Server is listening on '+process.env.PORT)
})


// l'applic comprend le json
app.use(express.json())


// on précise quelles routes sont à utiliser en fonction de l'objet qu'on veut
app.use("/api/users",require("./routes/users.route.js"))
app.use("api/teams",require("./routes/teams.route.js"))
app.use("/api/user_team",require("./routes/user_team.route.js"))
