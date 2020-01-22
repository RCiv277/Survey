const Entry = require('../model/entry')
const Form = require('../model/form')

module.exports = {
    entryForm,
}


function entryForm(req, res){
    Form.findById(req.params.id, function(err, form){
        res.json(form)
    })
}