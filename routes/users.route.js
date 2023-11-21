
// On récupère express
const express = require("express")

// On déclare un 'router'
const router =express.Router()


/*

 On récupère chaque méthode depuis le controller 

*/

const { getAll} =require("../controllers/users.controller")

const {add} =require("../controllers/users.controller")

const { getOne } = require("../controllers/users.controller")

const { update } = require("../controllers/users.controller")

const { deleteUser }= require("../controllers/users.controller")


// Une route pour chaque méthode
router.get("/",getAll)
router.get("/:id",getOne())
router.post("/",add)
router.put("/:id", update())
router.delete("/",deleteUser())

// On exporte le router
module.exports =router