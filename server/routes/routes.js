const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.js');
const Question = require('../../models/Questions.js');

// router.get('/', (req, res) => {
//   res.send('TESTTTTTT');
// })
//get all the quiz questions
router.get('/', controller.getQuestions, (req, res) => {
  res.status(200).json(res.locals.questions)
})
// //get one quiz question
// router.get('/:id', (req, res) => {

// })
//add a question
router.post('/', controller.addQuestions, (req, res) => {
    return res.status(201).json(res.locals.question)
  })
//update a question
// router.put('/questions/:id', (req, res) => {

// })
//delete a question
// router.delete('/questions/:id', (req, res) => {

// })


module.exports = router;