const express = require('express');
const Question = require('../../models/Questions.js');

const quizController = {};

quizController.addQuestions = (req, res) => {
  const { question, answerOne, answerTwo, answerThree, answerFour } = req.body;
  const questions = Question.create({
      question,
      answerOne,
      answerTwo,
      answerThree,
      answerFour
    })
    .then(Question =>{
      res.locals.question = Question;
      next();
    })
    .catch(error =>{
      return res.status(500).json({"error":error})
    })
}

quizController.getQuestions = async (req, res, next) => {
  console.log('inside get questions')

  const questions = await Question.find();
  res.locals.questions = questions;
  // console.log('result questions', res.locals.questions);
  next();
}

module.exports = quizController;