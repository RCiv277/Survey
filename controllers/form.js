const Form = require('../model/form')
const Victory = require('victory')


module.exports = {
    createForm,
    formIndex,
    detailsBasics,
    userIndex
}

async function formIndex(req, res) {
    const forms = await Form.find({})
    forms.filter( form => !form.hidden)
    res.json(forms);
}

async function createForm(req, res){
    req.body.user = req.user
    try{

        let createdForm = new Form(req.body)
        await Form.create(createdForm)
        res.json(createdForm)
    }
    catch(err){
        res.json(false)
    }
}

function detailsBasics(req, res){

}


async function userIndex(req, res){
    const forms = await Form.find({})
    forms.filter( form => form.user === req.user)
    res.json(forms);
}