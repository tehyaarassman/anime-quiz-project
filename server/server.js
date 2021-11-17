const express = require('express')
const app = express()
const path = require('path');
const mongoose = require('mongoose')

app.set('port', 3000);
// const cors = require('cors')
const routes = require('./routes/routes.js');
//set up mongoDB with atlas 

app.use(express.json());
// app.use(routes);
app.use('/questions', routes);

app.use(express.static(path.resolve(__dirname, '../dist')));

// app.get('/routes', (req, res) => {
//   res.send('TEST 2');
// });


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
})

// app.get('/results', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../src/results.html'));
// })

const MONGO_URI = 'mongodb+srv://tehyaarassman1:starwars1010@cluster0.oqx0c.mongodb.net/questionsCollection?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'questionsCollection'});

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('database connected'))

app.listen(app.get('port'), () =>{
  console.log('listening on port 3000');
}); 

module.exports = app;