const express = require("express")

app = express()

const PORT = 3000

app.get('/',(req,res)=>{
    res.send("Hello Wolrd!")
})

app.listen(PORT,()=>{
    console.log(`server is starting on http://localhost:${PORT}/`)
})