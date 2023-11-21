
/*

    On récupère la base de données

*/

const db =require("../config/database.js")



/*

    Méthode récupérant tout les 'users'

*/

const getAll = () =>{
    const sql ="SELECT * FROM Users ORDER BY name"
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

    Méthode récupérant un 'user' en fonction de son 'id'

*/


const getOne =(id) =>{
    const sql ="SELECT * FROM Users WHERE id={id}"
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

     Méthode pour ajouter un 'user'

*/ 

const add =(name,pwd,email,created,admin,team) =>{
    const sql ="INSERT INTO Users(name,pwd,email,created,admin,team) VALUES({name},{pwd},{email},{admin},{team})"
    db.exec(sql,[name,pwd,email,created,admin,team],(err,rows)=>
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

    Méthode pour modifier le 'nom'(name) d'un 'user' en fonction de son 'id'

*/

const update = (id,name) =>{
    const sql ="update users set name={name} where id={id}"
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

    Méthode pour supprimer un 'user' en fonction de son 'id'

*/

const deleteUser = (id)=> {
    const sql= "delete from users where id ={id}"
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

module.exports={add,getOne,getAll,update,deleteUser}