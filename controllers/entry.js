const Entry = require('../model/entry')
const Form = require('../model/form')

module.exports = {
    entryForm,
    createEntry,
    entryReview,
}



async function createEntry(req, res){
    let newEntry = {
        timeFinished: req.body.timeFinished,
        changedAnswers: req.body.changedAnswers,
        changedQuestions: req.body.changedQuestions,
        formId: req.body.formId
    }
    let answers = req.body.answers
    let thisForm = {}
    await Form.findById(req.body.formId, function(err, form){
        if(answers[0] === 'a'){
            form.entriesQ1.a += 1
        }
        else if(answers[0] === 'b'){
            form.entriesQ1.b += 1
        }
        else if(answers[0] === 'c'){
            form.entriesQ1.c += 1
        }
        else if(answers[0] === 'd'){
            form.entriesQ1.c += 1
        }
        if(answers[1] === 'a'){
            form.entriesQ2.a += 1
        }
        else if(answers[1] === 'b'){
            form.entriesQ2.b += 1
        }
        else if(answers[1] === 'c'){
            form.entriesQ2.c += 1
        }
        else if(answers[1] === 'd'){
            form.entriesQ2.c += 1
        }
        if(answers[2] === 'a'){
            form.entriesQ3.a += 1
        }
        else if(answers[2] === 'b'){
            form.entriesQ3.b += 1
        }
        else if(answers[2] === 'c'){
            form.entriesQ3.c += 1
        }
        else if(answers[2] === 'd'){
            form.entriesQ3.c += 1
        }
        if(answers[3] === 'a'){
            form.entriesQ4.a += 1
        }
        else if(answers[3] === 'b'){
            form.entriesQ4.b += 1
        }
        else if(answers[3] === 'c'){
            form.entriesQ4.c += 1
        }
        else if(answers[3] === 'd'){
            form.entriesQ4.c += 1
        }
        if(answers[4] === 'a'){
            form.entriesQ5.a += 1
        }
        else if(answers[4] === 'b'){
            form.entriesQ5.b += 1
        }
        else if(answers[4] === 'c'){
            form.entriesQ5.c += 1
        }
        else if(answers[4] === 'd'){
            form.entriesQ5.c += 1
        }
        if(answers[5] === 'a'){
            form.entriesQ6.a += 1
        }
        else if(answers[5] === 'b'){
            form.entriesQ6.b += 1
        }
        else if(answers[5] === 'c'){
            form.entriesQ6.c += 1
        }
        else if(answers[5] === 'd'){
            form.entriesQ6.c += 1
        }
        if(answers[6] === 'a'){
            form.entriesQ7.a += 1
        }
        else if(answers[6] === 'b'){
            form.entriesQ7.b += 1
        }
        else if(answers[6] === 'c'){
            form.entriesQ7.c += 1
        }
        else if(answers[6] === 'd'){
            form.entriesQ7.c += 1
        }
        if(answers[7] === 'a'){
            form.entriesQ8.a += 1
        }
        else if(answers[7] === 'b'){
            form.entriesQ8.b += 1
        }
        else if(answers[7] === 'c'){
            form.entriesQ8.c += 1
        }
        else if(answers[7] === 'd'){
            form.entriesQ8.c += 1
        }
        if(answers[8] === 'a'){
            form.entriesQ9.a += 1
        }
        else if(answers[8] === 'b'){
            form.entriesQ9.b += 1
        }
        else if(answers[8] === 'c'){
            form.entriesQ9.c += 1
        }
        else if(answers[8] === 'd'){
            form.entriesQ9.c += 1
        }
        if(answers[9] === 'a'){
            form.entriesQ10.a += 1
        }
        else if(answers[9] === 'b'){
            form.entriesQ10.b += 1
        }
        else if(answers[9] === 'c'){
            form.entriesQ10.c += 1
        }
        else if(answers[9] === 'd'){
            form.entriesQ10.c += 1
        }
        thisForm = form
    })
    await Form.findOneAndUpdate({formId: req.body.Id} , thisForm)
    let entry = new Entry(newEntry)
    await Entry.create(entry)
    res.json('yo')
}


function entryForm(req, res){
    console.log('Wait What')
    Form.findById(req.params.id, function(err, form){
        form[0].user = null
        res.json(form)
    })
}

async function entryReview(req, res){
    let info = {}
    await Form.findById(req.params.id, function(err, form){
        info.formData = form
    })
    Entry.find({} , function(err, entries){
        let entry = entries
            .filter((a) => (a.formId !== req.paramsId))
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)
        let sixEntries = [entry[0],entry[1],entry[2],entry[3],entry[4],entry[5]]

        
        let times = []
        
        
        sixEntries.forEach( (ent , idx) => {
            ent.changedAnswers.forEach(ans => {
                ans.entry = idx
                ans.type = 'a'
                times.push({ time: ans})
            })
            ent.changedQuestions.forEach(ques => {
                ques.entry = idx
                ques.type = 'q'
                times.push({ time: ques})
            })
        })
        times.sort( (a , b) => {
            if(a.time.timeChanged < b.time.timeChanged) return -1
            if(a.time.timeChanged > b.time.timeChanged) return 1
            return 0})
             
            let retInfo = {
                question : info.formData.question,
                answerA : info.formData.answerA, 
                answerB : info.formData.answerB, 
                answerC : info.formData.answerC, 
                answerD : info.formData.answerD,
                times: times}



            console.log(times)
            res.json(retInfo)
    })
    
}


