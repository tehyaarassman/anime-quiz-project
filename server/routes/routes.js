const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('TESTTTTTT');
})
//get all the quiz questions
router.get('/questions', (req, res) => {

})
//get one quiz question
router.get('/quesitons/:id', (req, res) => {

})
//add a question
router.post('/questions', (req, res) => {

})
//update a question
router.put('/questions/:id', (req, res) => {

})
//delete a question
router.delete('/questions/:id', (req, res) => {

})


module.exports = router;