const mongoose = require('mongoose');
const Pizza = require('../models/pizzas');
const Ingredients = require('../models/build-pizza');
// const pizzaList = require('./initData')

async function main() {
await mongoose.connect("mongodb://127.0.0.1:27017/pizzeria");
}

main().then(async ()=>{
    console.log("MongoDb connected");
    await Ingredients.deleteMany({});
    await Ingredients.insertMany(ingredients);
    console.log("Ingredients initialisation success");
    process.exit();
    
    
}).catch((error)=>{
    console.log("Some error in db",error.message);
    
})

let ingredients = [
        {
            "id": 101, "iname": "Pepperoni",

            "price": 110, "image": "https://thumb1.shutterstock.com/display_pic_with_logo/55755/161642033/stock-photo-single-slice-of-pepperoni-meat-isolated-on-white-with-path-shot-from-above-161642033.jpg"
        },

        {
            "id": 102, "inamee": "Mushroom",

            "price": 35, "image": "https://thumb9.shutterstock.com/display_pic_with_logo/1207547/568114672/stock-photo-fresh-cultivated-button-mushrooms-and-twigs-of-parsley-in-the-wooden-basket-one-whole-mushroom-and-568114672.jpg"
        },

        { "id": 103, "iname": "Black beans", "price": 45, "image": "https://thumb1.shutterstock.com/display_pic_with_logo/180783430/755093356/stock-photo-black-beans-grain-on-white-background-755093356.jpg" },

        { "id": 104, "iname": "Black olive", "price": 50, "image": "https://thumb7.shutterstock.com/display_pic_with_logo/137002/244097551/stock-photo-black-cut-olive-rings-isolated-on-white-244097551.jpg" },

        { "id": 105, "iname": "Green olive", "price": 50, "image": "https://thumb7.shutterstock.com/display_pic_with_logo/4526794/639321544/stock-photo-stuffed-olives-isolated-on-white-background-639321544.jpg " },

        { "id": 106, "iname": "Jalapeno", "price": 45, "image": "https://thumb7.shutterstock.com/display_pic_with_logo/999701/250939984/stock-photo-sliced-green-jalapeno-peppers-on-white-background-250939984.jpg" },

        { "id": 107, "iname": "Chicken", "price": 60, "image": "https://thumb7.shutterstock.com/display_pic_with_logo/371512/583587001/stock-photo-fresh-raw-chicken-isolated-on-white-583587001.jpg " },

        { "id": 108, "iname": "Tomato", "price": 20, "image": "https://thumb1.shutterstock.com/display_pic_with_logo/721492/400195690/stock-photo-tomatoes-isolated-on-white-background-400195690.jpg" },

        { "id": 119, "iname": "Red peprika", "price": 30, "image": "https://thumb9.shutterstock.com/display_pic_with_logo/676765/343609895/stock-photo-chili-pepper-isolated-on-a-white-background-343609895.jpg" },

        { "id": 110, "iname": "Paneer", "price": 45, "image": "https://thumb7.shutterstock.com/display_pic_with_logo/605002/195341264/stock-photo-piece-of-cheese-or-paneer-isolated-on-a-white-background-195341264.jpg " },

        { "id": 111, "iname": "Fried Onion", "price": 18, "image": "https://thumb1.shutterstock.com/display_pic_with_logo/152950/630261116/stock-photo-delicious-crispy-fried-onion-rings-isolated-on-white-630261116.jpg" },

        { "id": 112, "iname": "Capsicum", "price": 15, "image": "https://thumb7.shutterstock.com/display_pic_with_logo/259963/259963,1235208469,1/stock-photo-vegetables-bulgarian-pepper-on-a-white-background-isolated-25335661.jpg" },

        { "id": 114, "iname": "Sweet corn", "price": 38, "image": "https://thumb7.shutterstock.com/display_pic_with_logo/3102608/706329457/stock-photo-sweet-corn-in-wooden-bowl-and-spoon-isolated-on-white-background-706329457.jpg" }

    ]

