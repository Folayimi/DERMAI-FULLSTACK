const router = require("express").Router()
const DisplayProduct = require("../Models/displayProducts.models")

router.route("/")
.get((req, res)=>{
  DisplayProduct.find()
  .then(resp => res.json(resp))
  .catch(err => res.json(err))
})
.post((req, res)=>{
  const product = req.body
  new DisplayProduct(product).save()
  .then(resp => res.json({message: "Success"}))
  .catch(resp => res.status(401).json({message: "Failure"}))
})

module.exports = router