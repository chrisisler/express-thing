let express = require('express')
let path = require('path')

let server = express()

const PORT = 3000

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

server.get('/bar', (req, res) => {
  res.sendFile(path.join(__dirname + '/bar.html'))
})

server.listen(PORT, () => {
  console.log('Listening!')
})
