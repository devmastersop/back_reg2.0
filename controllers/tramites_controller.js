const db = require('../dataBase/conectionDB')
const q = require('../dataBase/querys')

function getTramitesByDni(req, res){
    const dni = req.params.dni
    console.log('Dni: '+ dni)
    db.cliente.query(q.qGetTramitesByDni, [dni], function(err, body){
        if(err){
            throw err
        }
        res.status(200).json(body.rows)
    })
}


function postNewTramiteById(req,res){
    const id =parseInt(req.params.id)
    console.log('persona_id: '+id)
    req.body.id_ciclo
    const id_curso = req.body.id_curso
    console.log(req.body.id_curso)
   // const id_pmodalidad = req.body.id_pmodalidad
    console.log(req.body.id_pmodalidad)
    //const id_planilla_tipo = req.body.id_planilla_tipo
    console.log(req.body.id_planilla_tipo)

    const id_ciclo = req.body.id_ciclo
    console.log(req.body.id_ciclo)

    //const n_oficio = req.body.n_oficio
    //console.log(req.body.n_oficio)

    const t_horas = req.body.t_horas
    console.log(req.body.t_horas)
    //const t_alumnos = req.body.t_alumnos
    console.log(req.body.t_alumnos)
    const t_unidad = req.body.t_unidad
    console.log(req.body.t_unidad)
//const n_siaf = req.body.n_siaf
    console.log(req.body.n_siaf) 
    const importe = t_horas * t_unidad
    console.log(importe)

    db.cliente.query(q.qPostNewTramiteById, [id, id_curso, id_ciclo, t_horas, t_unidad,importe], function(err, body){
        if(err){
            throw err
        }
        res.status(200).send('Tramite Registrado Correctamente')
    })
}

function putTramiteById(req, res){
    const idd = req.params.idd
    console.log("Id Tramite: "+idd)
    const t_horas = req.body.t_horas
    console.log(req.body.t_horas)
    const t_alumnos = req.body.t_alumnos
    const t_unidad = req.body.t_unidad
    console.log(req.body)
    const importe = t_horas * t_unidad
    db.cliente.query(q.qPutTramiteById, [idd,t_horas, t_alumnos, t_unidad, importe], function(err, body){
        if(err){
            throw err
        }
        res.status(200).send('Tramite Actualizado Correctamente')
    })
}

module.exports = {
    getTramitesByDni,
    postNewTramiteById,
    putTramiteById
}