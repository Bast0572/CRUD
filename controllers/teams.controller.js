/*

  On récupère la base de données 

*/

const database = require("../config/database.js")


/*

   On récupère toutes les 'teams'

*/

const getAll = (req,res) =>{
  res.json(database.Teams)
};


/*

  On récupère une 'team' en fonction de son 'id'

*/

const getOne =(req,res) => {
  res.json(database.Teams)
};


/*

  On modifie un le 'nom'(name) d'une 'team'

*/


const update =async (req,res) => {
  const team = {
    
    id: req.body.id,
    name: req.body.name

  };
  await team.update(user).then(() =>{
    res.sendStatus(200);
  })
}

/*

  On supprime une 'team' en fonction de son 'id'

*/
const deleteTeam = async (req,res)=>{
  const team = {
    id:req.body.id
  };
  await team.deleteTeam(user).then(()=>
  res.sendStatus(200))
}

/*

  On ajoute une 'team'

*/
const add = async (req, res) => {
  const team = {
    name: req.body.name,
  };
  await team.add(team).then(() => {
    res.sendStatus(201);
  });
};

// on exporte les méhodes
module.exports= {add,getAll,getOne,update,deleteTeam}