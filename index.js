const express = require('express')
const app = express()
const path = require('path')
const data = require('./contract.json')
const PORT = process.env.PORT || 3000

app.get("/data", (req,res) => {
  res.send(data)
});


app.listen(PORT, () => {
  console.log(`Listen on port http://localhost:${PORT}`)
});