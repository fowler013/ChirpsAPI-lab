const express = require('express')
const chirpsStore = require('../chirpstore')


let router = express.Router();


router.get('/:id?', (req, res)=> {
    let id = req.params.id
    if(id) {
        res.json(chirpsStore.GetChirp(id));
    }else{
        res.send(chirpsStore.GetChirps())
    }
    
});
// THIS WILL POST ANY CREATED CHIRPS//
router.post('/', (req,res) => {
    let test = req.body
    res.json(chirpsStore.CreateChirp(test))
    


})
// THIS IS MY DELETE ID//
router.delete('/:id', (req,res) =>{
    let id = req.params.id;
    
    chirpsStore.DeleteChirp(id);
    res.sendStatus(200)
    

    
})
// THIS IS MY UPDATED//
router.put('/:id?', (req, res) => {
    let id = req.params.id;
    chirpsStore.UpdateChirp(id, req.body)
    res.sendStatus(200);
})


module.exports = router; // THIS IS THE FILE THA HANDLES ALL OF OUR API ROUTES//