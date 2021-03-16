const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB();

app.get('/',(req,res)=>{
    res.send("API is running")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('Server is up on port '+ PORT) 
});