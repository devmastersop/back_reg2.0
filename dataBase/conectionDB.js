const {Client} = require('pg')


//Setting for the connection
const connectionDB = {
    user:'modulo4',
    host:'67.205.143.180',
    database:'tcs2',
    password:'modulo4',
    port:5432
}

const cliente = new Client(connectionDB)

module.exports={
    cliente
}