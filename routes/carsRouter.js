const express = require('express')
//import knex
const knex = require('knex')
//import knexfile
const knexConfig = require('../knexfile')
// define db
const db = knex(knexConfig.development)

const router = express.Router();

router.get('/', (req,res) =>{
   router.send(res.status(200).json("<h1>Working</h1>"))
})

module.exports = router