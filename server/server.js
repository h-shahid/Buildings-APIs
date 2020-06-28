const express = require('express')

//cross origin resource sharing- blocks/controls access to server
const cors = require('cors') 

//Import the entire routes folder-will search for index.js(home page)
const apiRouter = require('./routes')
//Import path 
const path = require('path')

//created express application 
let app = express() 

//Middleware 
app.use(cors())  //pulls in cors()
app.use(express.json()) //body-parser equivalent 

//Middleware for our routers 
app.use('/api', apiRouter)  //Allows us to use localhost:3000/api/ 

//Middleware for client 
let clientPath = path.join(__dirname, '../client')
app.use(express.static(clientPath))

app.listen(3000) //listening on local host 3000