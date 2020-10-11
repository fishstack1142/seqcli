const express = require('express')
const { User } = require('./models')
const routes = require('./routes')

const bodyParser = require('body-parser')

// const { User } = require('./models/user')

const PORT = process.env.PORT || 3000

const app = express()

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});

app.use(bodyParser.json())

app.get('/users', async (req, res) => {
    const products = await User.findAll()
    res.json(products)
})


app.get('/user/:id',  async (req, res) => {

    const { id } = req.params
    res.json(await User.findOne({ where: { id: id } }))
})

app.get('/user/firstname/:firstname',  async (req, res) => {

    const { firstname } = req.params
    res.json(await User.findAll({ where: { firstName: firstname } }))
})

app.get('/', (req, res) => {
    res.send("home")
})

app.use('/api', routes)

module.exports = app