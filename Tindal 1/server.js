const express = require('express')
const app = express()
const port = 3000



app.get('/', (req, res) => {
  console.log("GET")
  res.send('GET')
})

app.post('/', (req, res) => {
  console.log("POST")
  res.send('POST')
})

app.put('/', (req, res) => {
  console.log("PUT")
  res.send('PUT')
})

app.delete('/', (req, res) => {
  console.log("DELETE")
  res.send('DELETE')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})