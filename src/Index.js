'use strict'

const express = require('express')
const config = require('config')
const app = express()
const mysql = require('mysql')



const pool = mysql.createPool({
    host:"localhost",
    database:"HarryPotter",
    user:"root",
    password:"LuisMiguel2303",
    connectionLimit: 100
})



app.listen(3305);