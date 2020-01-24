const express = require('express')
const router = express.Router()
const formCTRL = require('../../controllers/form')
const entryCTRL = require('../../controllers/entry')
router.use(require('../../config/auth'));

router.post('/create' , formCTRL.createForm)
router.post('/entry' , entryCTRL.createEntry)
router.get('/', formCTRL.formIndex)
router.get('/user', checkAuth, formCTRL.userIndex)
router.get('/:id', entryCTRL.entryForm)
router.post('/:id', entryCTRL.entryReview)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router