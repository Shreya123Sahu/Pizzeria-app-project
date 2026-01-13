const express = require('express');
const app = express();
const port = 8080;
const dbConnect = require('./db/db.config');
const routerPizza = require('./routes/pizza.routes');
const cors = require('cors')


app.use(cors());
dbConnect();
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api",routerPizza)


app.get('/',(req,res)=>{
    res.send('Testing get')
})



app.listen(port,()=>{
    console.log(`Server listening to port ${port}`);
    
})