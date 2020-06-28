const express = require('express')
//import chirpstore in order to use methods in chirps.js
const chirpStore = require("../chirpstore") 
//Create Router
let router = express.Router() 

//Get Route - we can get all our chirps w/ this route 
router.get('/', (req, res) => {
res.send(chirpStore.GetChirps())
})
//Get route for chirps by a specific ID
router.get('/:id?', (req, res) =>{
let id = req.params.id //will pull in a parameter & specify it
// if(id){
//     res.json(chirpStore.GetChirp(id))
// }else{
// res.send(chirpStore.GetChirps())
// }
res.json(chirpStore.GetChirp(id))
} )

//Post/Create Route
router.post('/', (req, res) =>{
    //version 1
    chirpStore.CreateChirp(req.body)
    res.sendStatus(200)
    //version2 create an obj that represents the body
    // let chirpBody = {
    //     username: res.body.username, //response of the body to the username
    //     message: res.body.message

    // }
    // chirpStore.CreateChirp(chirpBody)
    // res.sendStatus(200)
    
})
//Put/Update route 
router.put('/:id?', (req, res) =>{
    let id = req.params.id
    let chirp = req.body
    if (id) {
        chirpStore.UpdateChirp(id, chirp)
        res.send(`Updated Chirp ${id}`) 
    } else {
        res.sendStatus(404)
    }
  
})
//Delete Route
router.delete('/:id', (req, res) =>{
    let id = req.params.id
    if (id) {
        chirpStore.DeleteChirp(id)
        res.send(chirpStore.GetChirps())
    } else {
        res.sendStatus(404)
    }

})

//want to be able export(pass) all the routes to index.js
module.exports = router //handles all api routes for chirps resource
