const express = require('express');
const router = express.Router();
const  Pizza = require('../models/pizzas')
const Ingredients = require('../models/build-pizza')

router.get('/test',(req,res)=>{
    console.log("router working using routes");
    
})

router.get('/pizzas',async (req,res)=>{
    try {
         let pizzaList = await Pizza.find();
    res.json({
        "message" : "Pizzas logged successfully",
        pizzaList
    })
    } catch (error) {
        res.json({
            "error" : error.message
        })
    }
})

router.get('/buildPizza',async (req,res)=>{
    try {
         let ingList = await Ingredients.find();
    res.json({
        "message" : "Ingredients logged successfully",
        ingList
    })
    } catch (error) {
        res.json({
            "error" : error.message
        })
    }
})

module.exports = router