/*

  On récupère la base de données 

*/

const database = require("../config/database.js")


/*

   On récupère tout les 'users'

*/

const getAll = (req,res) =>{
  res.json(database.Users)
};


/*

  On récupère un 'user' en fonction de son 'id'

*/

const getOne =(req,res) => {
  res.json(database.Users)
};


/*

  On modifie un le 'nom'(name) d'un 'user'

*/


const update =async (req,res) => {
  const user = {
    
    id: req.body.id,
    name: req.body.name

  };
  await user.update(user).then(() =>{
    res.sendStatus(200);
  })
}

/*

  On supprime un 'user' en fonction de son 'id'

*/
const deleteUser = async (req,res)=>{
  const user = {
    id:req.body.id
  };
  await user.deleteUser(user).then(()=>
  res.sendStatus(200))
}

/*

  On ajoute un 'user'

*/
const add = async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    pwd: req.body.pwd,
    created : req.body.created,
    team : req.body.team
  };
  await user.add(user).then(() => {
    res.sendStatus(201);
  });
};

// on exporte les méhodes
module.exports= {add,getAll,getOne,update,deleteUser}