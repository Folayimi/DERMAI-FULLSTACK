const mongoose = require("mongoose")
const Schema = mongoose.Schema

const displayProductSchema = new Schema({
  image: {type: String},
  title: {type: String},
  price: {type: Number},
  details: {type: String},
})

const DisplayProduct = mongoose.model("DisplayProduct", displayProductSchema)
module.exports = DisplayProduct