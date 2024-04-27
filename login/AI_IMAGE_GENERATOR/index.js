const express = require ('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT|| 5000;

const app = express();

//enable body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use('/openai',require('./routes/openai_routes'))

app.listen(PORT,()=>{
console.log(`server started on port: ${PORT}`);
})