
/*

    On récupère la base de données

*/

const db =require("../config/database.js")



/*

    Méthode récupérant toutes les 'team'

*/

const getAll = () =>{
    const sql ="SELECT * FROM teams ORDER BY name"
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

    Méthode récupérant une 'team' en fonction de son 'id'

*/


const getOne =(id) =>{
    const sql ="SELECT * FROM teams WHERE id={id}"
    db.get(sql,[id],(err,rows)=>{
        return new Promise((resolve,reject)=>{
            if (err){
               return reject(err)
            }
            return resolve(rows)
        })
    })

}

/*

     Méthode pour ajouter une 'team'

*/ 

const add =(name) =>{
    const sql ="INSERT INTO teams(name) VALUES({name})"
    db.exec(sql,[name],(err,rows)=>
    {
        return new Promise((resolve,reject) =>{
            if (err){
                return reject(err)
            }
            return resolve(rows)
        })
    })
}

/*

    Méthode pour modifier le 'nom'(name) d'une 'team' en fonction de son 'id'

*/

const update = (id,name) =>{
    const sql ="update teams set name={name} where id={id}"
    db.exec(sql,[id,name],(err,rows)=>{
        return new Promise((resolve,reject)=>{
            if (err){
                return reject(err)
            }
            return resolve(rows)
        })
    })
}

/*

    Méthode pour supprimer une 'team' en fonction de son 'id'

*/

const deleteTeam = (id)=> {
    const sql= "delete from teams where id ={id}"
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

module.exports={add,getOne,getAll,update,deleteTeam}