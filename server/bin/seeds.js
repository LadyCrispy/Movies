const mongoose = require('mongoose');
const Movie = require('../models/movies.model')
require("dotenv").config()


mongoose.connect(`${process.env.DBLOCAL}`, { useNewUrlParser: true })


const movies=[
  {
    title: 'La vida de Brian',
    description: 'Parodia',
    poster: 'String',
    video_url: 'String'
  },
  {
    title: 'La vida de Brian',
    description: 'Parodia',
    poster: 'String',
    video_url: 'String'
  },
  {
    title: 'La vida de Brian',
    description: 'Parodia',
    poster: 'String',
    video_url: 'String'

  }
]


Movie.create(movies)
  .then(moviesCreated=>{
    console.log(`${moviesCreated.length} movies added to DB`)
    mongoose.connection.close()
  })
  .catch(err => console.log(`There was an error ${err}`))
