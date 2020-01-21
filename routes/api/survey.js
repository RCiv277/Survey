const express = require('express')
const router = express.Router()
const formCTRL = require('../../controllers/form')
router.use(require('../../config/auth'));

router.post('/create' , formCTRL.createForm)
router.get('/', checkAuth, formCTRL.formIndex)
router.get('/user', checkAuth, formCTRL.userIndex)

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}


module.exports = router