const db =require("../config/database")

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
//module.exports= {getAll}

const getOne =(id) =>{
    const sql ="SELECT * FROM Users WHERE name={id}"
    db.get(sql,[id],(err,rows)=>{
        return new Promise((resolve,reject)=>{
            if (err){
               return reject(err)
            }
            return resolve(rows)
        })
    })

}
//module.exports={getOne}

const add =(name,pwd,email,created,admin,team) =>{
    const sql ="INSERT INTO Users(name,pwd,email,created,admin,team) VALUES({name},{pwd},{email},{admin},{team}"
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
module.exports={add,getOne,getAll}