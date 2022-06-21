const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const displayProductRouter = require("./Router/displayProductsRouter")
const affiliatesRouter = require("./Router/affiliatesRouter")

const app = express()


const uri= "mongodb://localhost:27017/gg"
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection
connection.once('open', ()=>{console.log('Database running Successfully')})

app.use(cors())
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: false}));
app.use("/api/affiliates", affiliatesRouter)
app.use("/api/display-products", displayProductRouter)

app.listen(5000, ()=> console.log("Hello World"))