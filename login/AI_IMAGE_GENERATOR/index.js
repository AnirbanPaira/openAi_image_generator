const path = require('path')
const express = require ('express');
const coros = require('cors')
const dotenv = require('dotenv').config();
const PORT = process.env.PORT|| 5000;

const app = express();
app.use(coros())
//enable body parser
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/openai',require('./routes/openai_routes'))

app.listen(PORT,()=>{
console.log(`server started on port: ${PORT}`);
})