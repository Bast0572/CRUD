/*

  On récupère la base de données 

*/

const database = require("../config/database.js")

// on récupère les méthodes de 'user'
const user =require("../controllers/users.controller.js")

// on récupère les méthodes de 'team'
const team = require("../controllers/teams.controller.js")

/*

   On récupère tous les 'user_team'

*/

const getAll = (req,res) =>{
  res.json(database.user_team)
};

/*

  On ajoute un 'user_team'

*/
const add = async (req, res) => {
  const team = {
    name: req.body.name,
  };
  await user_team.add(team).then(() => {
    res.sendStatus(201);
  });
};

/*

  On supprime tous les 'user_team' 

*/
const deleteAll_User_Team = async (req,res)=>{

  await user_team.deleteAll_User_Team(user).then(()=>
  res.sendStatus(200))
}

/*

 Shuffle on assigne des user a une équipe

*/
const Shuffle = async (req,res)=>{
    user_team.deleteAll_User_Team
let rows =user.getAll

await rows.forEach(element => {
    var value =Math.random(3)+1
    add(element.id,team.getOne(value))
}).then(()=>res.sendStatus(200))
}

// on exporte les méhodes
module.exports= {add,getAll,deleteAll_User_Team,Shuffle}
