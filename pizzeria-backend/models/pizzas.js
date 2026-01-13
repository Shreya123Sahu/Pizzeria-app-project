const mongoose = require('mongoose');
const ingredientsSchema = new mongoose.Schema({
    id:String,
    iname:String
})
const toppingsSchema= new mongoose.Schema({
    id:String,
    tname:String,
    price:Number
})
const pizzaSchema = new mongoose.Schema({
    id:String,
    type:{
        type:String,
        enum:['veg','nonveg'],
    },
    price:Number,
    name:String,
    image:String,
    description:String,
    ingredients:[ingredientsSchema],
    topping:[toppingsSchema]

})

module.exports = new mongoose.model('Pizza',pizzaSchema);