const express = require('express')
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors())

app.get('/get/degrees', (req, res) => {
    res.send(`${Math.round(Math.random() * 40)}`)

})

app.get('/get/wind', (req, res) => {
    res.send(`${Math.round(Math.random() * 20)}km/h`)
})

app.get('/get/moisture', (req, res) => {
    res.send(`${Math.round(Math.random() * 50)}%`)
})

app.listen(port, () => {
    console.log(`weatherStation running on port ${port}`)
})