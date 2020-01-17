const mongoose = require('mongoose')

const entriesSchema = new mongoose.Schema({
    timeFinished: {type:Number},
    changedAnswers: {type:Array , default: []},
    changedQuestions: {type:Array , default: []},
})

module.exports = mongoose.model("form" , formSchema)