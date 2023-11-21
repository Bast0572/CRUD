// On récupère express
const express = require("express")

// On déclare un 'router'
const router =express.Router()


/*

 On récupère chaque méthode depuis le controller 

*/

const { getAll} =require("../controllers/teams.controller")

const {add} =require("../controllers/teams.controller")

const { getOne } = require("../controllers/teams.controller")

const { update } = require("../controllers/teams.controller")

const { deleteTeam }= require("../controllers/teams.controller")


// Une route pour chaque méthode
router.get("/",getAll)
router.get("/:id",getOne())
router.post("/",add)
router.put("/:id", update())
router.delete("/",deleteTeam())

// On exporte le router
module.exports =router