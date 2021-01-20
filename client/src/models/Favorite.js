const mongoose = require('mongoose')
const Schema = mongoose.Schema

const favoriteSchema = new Schema({
  id: {
    type: String,
  },
  urls: {
    full: {
      type: String,
    },
    raw: {
      type: String,
    },
    regular: {
      type: String,
    },
    small: {
      type: String,
    },
    thumb: {
      type: String,
    },
  },
  tags: {
    type: Array,
  },
  links: {
    download: {
      type: String,
    },
    download_location: {
      type: String,
    },
    html: {
      type: String,
    },
    self: {
      type: String,
    },
  },
})

const Favorite = mongoose.model('Favorite', favoriteSchema)

module.exports = Favorite
