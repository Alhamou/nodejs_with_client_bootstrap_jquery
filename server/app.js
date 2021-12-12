const express = require("express")
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, "../src")))



const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("App run on Port", port)
})