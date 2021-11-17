import React, { Component } from 'react';
// import '.styles.scss';
import Quiz from "./Quiz.jsx";


const getQuestions = 'http://localhost:3000/questions';

class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <div>
        <Quiz getQuestions={getQuestions} />
      </div>
    )
  }
}

export default App;