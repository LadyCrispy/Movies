const mongoose=require('mongoose')
const Schema = mongoose.Schema

const movieSchema= new Schema({
  title: String,
  description: String,
  poster: String,
  video_url: String
}, {
  timestamps: true
})


const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie

