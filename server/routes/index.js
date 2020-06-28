const express = require("express");
//Import all the routes from Chirp.js (Chirps Router)
let chirpsRouter = require("./chirps");

//set up router 
let router = express.Router();

//Middleware 
router.use("/chirps", chirpsRouter);

//Export Router - packs up routes and gives the files connectivity
module.exports = router;


//index.js is the root of the routes folder