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
    chirpsStore.CreateChirp(req.body);
    res.sendStatus(200);
    
    let post = () =>{
        console
    }


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
    let chirp = chirpsStore.GetChirp(id);

    if (!chirp || Object.keys(chirp).length === 0) {
        return res.sendStatus(404);
    }
    chirpsStore.UpdateChirp(id, req.body)
    res.sendStatus(200);
})


module.exports = router; // THIS IS THE FILE THA HANDLES ALL OF OUR API ROUTES//