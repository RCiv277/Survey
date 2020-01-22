const express = require('express')
const router = express.Router()
const formCTRL = require('../../controllers/form')
const entryCTRL = require('../../controllers/entry')
router.use(require('../../config/auth'));

router.post('/create' , formCTRL.createForm)
router.get('/', checkAuth, formCTRL.formIndex)
router.get('/user', checkAuth, formCTRL.userIndex)
router.get('/:id', checkAuth, entryCTRL.entryForm)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router