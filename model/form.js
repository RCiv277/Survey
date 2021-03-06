const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)


const formSchema = new mongoose.Schema({
    name: {type: String , maxlength: 30},
    user: {},
    hidden: {type: Boolean, default:false},
    question: {type:Array},
    answerA: {type:Array},
    answerB: {type:Array},
    answerC: {type:Array},
    answerD: {type:Array},
    entriesQ1: {type:Object, default:{a:0 , b:0 , c:0 , d:0}},
    entriesQ2: {type:Object, default:{a:0 , b:0 , c:0 , d:0}},
    entriesQ3: {type:Object, default:{a:0 , b:0 , c:0 , d:0}},
    entriesQ4: {type:Object, default:{a:0 , b:0 , c:0 , d:0}},
    entriesQ5: {type:Object, default:{a:0 , b:0 , c:0 , d:0}},
    entriesQ6: {type:Object, default:{a:0 , b:0 , c:0 , d:0}},
    entriesQ7: {type:Object, default:{a:0 , b:0 , c:0 , d:0}},
    entriesQ8: {type:Object, default:{a:0 , b:0 , c:0 , d:0}},
    entriesQ9: {type:Object, default:{a:0 , b:0 , c:0 , d:0}},
    entriesQ10: {type:Object, default:{a:0 , b:0 , c:0 , d:0}},
})

module.exports = mongoose.model("Form" , formSchema)