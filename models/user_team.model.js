/*

    On récupère la base de données

*/

const db =require("../config/database.js")

/*

    Méthode récupérant tous les 'user_team'

*/

const getAll = () =>{
    const sql ="SELECT * FROM user_team ORDER BY name"
    db.get(sql,[],(err,rows)=>{
        return new Promise((resolve,reject)=>{
            if (err){
               return reject(err)
            }
            return resolve(rows)
        })
    })
}

/*

     Méthode pour ajouter un 'user_team'

*/ 

const add =(id1,id2) =>{
    const sql ="INSERT INTO user_team(user_id,team_id) VALUES({id1},{id2})"
    db.exec(sql,[id1,id2],(err,rows)=>
    {
        return new Promise((resolve,reject) =>{
            if (err){
                return reject(err)
            }
            return resolve(rows)
        })
    })
}

const deleteAll_User_Team = (id)=> {
    const sql= "delete from user_team"
    db.exec(sql,[id],(err,rows) => {
        return new Promise((resolve,reject)=>{
            if(err){
                return reject(err)
            }

            return resolve(rows)
        })
    })
}
// On exporte les différentes méthodes pour pouvoir les utiliser dans d'autre fichiers

module.exports={add,getAll,deleteAll_User_Team}