const express = require('express')
const router = express.Router()
const knex = require('../data/dbConfig')

// get list

router.get('/', (req,res) =>{
  knex('cars')
  .then(cars =>{
      res.status(200).json(cars)
  })
  .catch(error =>{
      res.status(500).json({message:error})
  })
})

//Get by ID
router.get('/:id',(req,res)=>{
    knex('cars')
    .select()
    .from('cars')
    .where({id:req.params.id})
    .first()
    .then(car =>{
        if(car){
            res.status(200).json(car)
        }
            else{
                res.status(404).json({message:'Vin not found'})
            }
        })
        .catch(error=>{
            res.status(500).json({message:"We no work"})
        })
    })

    router.post('/add',(req,res)=>{
      const accountData = req.body
      knex()
      .insert(accountData, 'id')
      .into('cars')
  
    .then(accountID =>{
        res.status(200).json({data:accountID})
    })
    .catch(error =>{
        res.status(500).json({message:error})
    })
    })
module.exports = router