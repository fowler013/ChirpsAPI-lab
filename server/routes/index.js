const express = require('express');
const chirpsRouter = require('./chirps')// THIS IS TO REFERENCE A FILE WITHIN OUR PROJECT(./fileName)//
const usersRouter = require('./users')

let router = express.Router() //THIS CREATES A NEW ROUTER//

router.use('/chirps', chirpsRouter); // THIS IS SAYING WHERE IT LIVE//
router.use('/users', usersRouter); // THIS SAY WHERE IT LIVES//



module.exports = router;