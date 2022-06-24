const router = require ("express").Router()
const Affiliate = require("../Models/affiliates.models")

router.route("/")
.get((req, res)=>{
  Affiliate.find()
  .then(resp => res.json(resp))
  .catch(err => res.json(err))
})
.post((req, res)=>{
  const affiliate = req.body
  new Affiliate(affiliate).save()
  .then(resp => res.json({message: "Success"}))
  .catch(resp => res.status(401).json({message: "Failure"}))
})

module.exports = router