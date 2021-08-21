const express = require('express');
const bodyParser= require('body-parser')
const MongoClient = 
require('mongodb').MongoClient

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))
const  port = process.env.port || 8080
app.listen(port, () => console.log('listening on port 8080'))
MongoClient.connect('mongodb+srv://iykehng:<iykehng>@cluster0.lrypo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    (err,client)=>{
    if (err) return
    console.error(err)
    console.log('connected to database')
})

app.get('/', (req , res)=>{
    res.sendFile('C:/Users/IYKE OKOLO/Desktop/crudd' + '/index.html')
})
app.post('/email', (req, res)=>{
    console.log(req.body)
})