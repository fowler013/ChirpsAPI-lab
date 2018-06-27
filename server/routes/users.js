const express = require('express')
let router = express.Router();

router.get('/users', (req, res)=> {
    res.send('users')
})


module.exports = router; // THIS IS THE FILE THA HANDLES ALL OF OUR API ROUTES//