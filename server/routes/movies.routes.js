const express = require('express');
const router  = express.Router();
const Movie = require ('../models/movies.model')


// GET movies list
router.get('/movies', (req, res) => {
    Movie.find()
    .then(data => res.json(data))
    .catch(err => console.log('Error:', err))
});

// router.get('/moviesByQuery', (req,res) => {
//     req.body.userInput
//     Movie.findMany()
// })

// GET movie detail
router.get('/movies/:id', (req, res) =>{
    Movie.findById(req.params.id)
        .then(data=> res.json(data))
        .catch(err=> console.log('There was an error: ', err))
})

//POST delete movie
router.post('/delete/:id', (req, res)=>{
    Movie.findByIdAndDelete(req.params.id)
        .then(theMovie=>{
            Movie.find()
                .then(data=>res.json(data))
        })
        .catch(err=> console.log(err))

})


//POST edit movie
router.post('/edit/:id' , (req, res, next)=>{
    const update = {title, description, poster, video_url}=req.body

    Movie.findByIdAndUpdate(req.params.id, update, {new: true})
        .then(movieUpdated=>{
            console.log(req.body)
            res.json(movieUpdated)
        })
        .catch(err=>console.log(err))
})





module.exports = router;
