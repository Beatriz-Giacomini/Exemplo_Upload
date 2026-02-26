const express = require('express')
const multer = require('multer')
const server = express()

const upload = multer({dest: 'img/'})
server.use('/img',express.static('img'))
server.use(express.static('public'))
           // TORNAR PÚBLICO

server.listen(3000, () =>
    console.log('Rodando em http://localhost:3000')
)
