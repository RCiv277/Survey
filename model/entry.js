const mongoose = require('mongoose')

const entrySchema = new mongoose.Schema({
    timeFinished: {type:Number},
    changedAnswers: {type:Array , default: []},
    changedQuestions: {type:Array , default: []},
    formId: {type:String},
})

module.exports = mongoose.model("Entry" , entrySchema)