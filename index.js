const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const categories = require('./data/Catagories.json')

app.use(cors())

app.get('/', (req, res)=>{
    res.send('Hello world')
})

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.listen(port, ()=>{
    console.log(`Hello I am Comming ${port}`);
})