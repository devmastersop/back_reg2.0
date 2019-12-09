if(process.env.NODE_ENV!=="production"){
    require("dotenv").config();
}

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')



//Inciar el server

const app = express()
app.set("port", process.env.PORT)


//import Files
const global = require('./Resources/global')
const teachers_controller = require('./controllers/teachers_controller')
const tramites_controller = require('./controllers/tramites_controller')

//Operations



//conection Server
app.use(bodyParser.json())
app.use(cors())
app.options('*', cors())
app.use(
    bodyParser.urlencoded({
        extended:true
    })
)

//Obtener Lista de teachers
app.get(global.URL_Base + 'teachers', teachers_controller.getTeachers)

app.get(global.URL_Base + 'teachers/:dni', teachers_controller.getTeachersByDni)

app.get(global.URL_Base + 'teachers/:dni/tramites', tramites_controller.getTramitesByDni)

app.post(global.URL_Base + 'teachers/:id/tramites', tramites_controller.postNewTramiteById)

app.put(global.URL_Base + 'teachers/:id/tramites/:idd', tramites_controller.putTramiteById)

//Puerto donde se escuchará
app.listen(app.get("port"), function(){
    console.log('Api listen on port: ' +app.get("port"))
})