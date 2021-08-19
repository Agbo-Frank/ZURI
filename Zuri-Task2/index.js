var express = require('express')

var app = express()

app.use('/', express.static('img'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/resume.html')
})

app.listen(8000)