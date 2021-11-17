const mongoose = require('mongoose');


const QuestionSchema = new mongoose.Schema({
  question: {type : String, required : true},
  answerOne: {type : String, required : true},
  answerTwo: {type : String, required : true},
  answerThree: {type : String, required : true},
  answerFour: {type : String, required : true},
})

module.exports = mongoose.model('Question', QuestionSchema)