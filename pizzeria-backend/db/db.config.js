const mongoose = require('mongoose');


async function main() {
await mongoose.connect("mongodb://127.0.0.1:27017/pizzeria");
}

main().then(async ()=>{
    console.log("MongoDb connected");
    
}).catch((error)=>{
    console.log("Some error in db",error.message);
    
})

module.exports = main;