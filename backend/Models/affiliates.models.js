const mongoose = require("mongoose")
const Schema = mongoose.Schema

const affiliateSchema = new Schema({
  fullName : {type: String, required: true},
  phoneNumber : {type: Number, require: true},
  email: {type: String, require: true},
  image: {type: String},
  gender: {type: String}
})

const Affiliate = mongoose.model("Affiliate", affiliateSchema)
module.exports = Affiliate
