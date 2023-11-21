// On récupère express
const express = require("express")

// On déclare un 'router'
const router =express.Router()


/*

 On récupère chaque méthode depuis le controller 

*/


const { getAll} =require("../controllers/user_team.controller")

const {add} =require("../controllers/user_team.controller")

const { deleteAll_User_Team }= require("../controllers/user_team.controller")

const { Shuffle} = require("../controllers/user_team.controller")

// Une route pour chaque méthode
router.get("/",getAll)

router.post("/",add)

router.delete("/",deleteAll_User_Team())

router.Shuffle("/shuffle",Shuffle)

// On exporte le router
module.exports =router