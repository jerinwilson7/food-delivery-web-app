const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const db = require('./db/connection')

const app = express();

var corsOption = {
    origin:"https://localhost:3000"
}

const productRouter = require('./routes/productRouter')

app.use(cors(corsOption));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

db.on('error',console.error.bind(console,'mongodb connection error'))

app.get('/',(req,res)=>{
    res.json({ messsage:"welcome to foodies"});
});

const PORT = process.env.Port || 8080;

app.listen(PORT,()=>{
    console.log(`server is running on the port ${PORT}`);
})

app.use('/api/',productRouter)