const db = require('../dataBase/conectionDB')
const query = require('../dataBase/querys')
const log = require('log')

//Iniciazialite connection
db.cliente.connect()

//Get 
const getTeachers = (req, res) => {
    
    const q = req.query
    console.log('Query Found it!')
    if(q.name != undefined){
        const name = q.name.toUpperCase()
        db.cliente.query(query.qGetByName, [name], (err, body)=>{
            if(err){
                throw err
            }
            res.status(200).json(body.rows)
            console.log(body.rows.length)
        })
    }
    else{
        console.log('List All without query!')
        db.cliente.query(query.qGetTeachers, (err, body)=>{
            if(err){
                throw err
            }
            res.status(200).json(body.rows)
            console.log(body.rows.length)
        })
    }
}

function getTeachersByDni(req, res){
    console.log('Ingreso a GET By Dni!')
    const dni = req.params.dni
    console.log('Dni: ' + dni)
    db.cliente.query(query.qGetTeachersByDni, [dni], function(err, body){
        if(err){
            throw err
        }
        res.status(200).json(body.rows)
    })
}

module.exports = {
    getTeachers,
    getTeachersByDni
}