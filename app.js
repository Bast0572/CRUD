const express = require("express")
const app =express()


const config =require("./config/config")()
const db =require("./config/database")
process.env.PORT = config.port

app.listen(process.env.PORT,() =>{
    console.log('Server is listening on '+process.env.PORT)
})
app.use(express.json())
app.use("/api/users",require("./routes/users.route.js"))
app.use("api/teams",require("./routes/teams.route.js"))
