const express = require("express")

const router =express.Router()

const { getAll} =require("../controllers/users.controller")


const {add} =require("../controllers/users.controller")
const { getOne } = require("../controllers/users.controller")

router.get("/",getAll)
router.get("/:id",getOne)
router.post("/",add)

module.exports =router