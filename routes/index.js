const { Router } = require('express')
const {createUser} = require('../controllers');

const router = Router()

router.get('/root', (req, res) => {

    res.send('This is root')
});

router.post('/users', createUser)

module.exports = router