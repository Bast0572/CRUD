const database = require("../config/database")

const getAll= (req,res) =>{res.json(users)}

//module.exports ={getAll}

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
module.exports= {add,getAll}