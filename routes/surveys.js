const express = require('express')
const router = express.Router()
const formCTRL = require('../controllers/form')

router.get('/create' , formCTRL.creationForm)
router.post('/create' , formCTRL.createForm)





module.exports = router