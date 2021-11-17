import React, { Component } from 'react';
import Question from './Question.jsx';
// import "/styles.scss";
//change to class component???
//use life cycle??? to fetch?>???---component did mount(set up fetch to /questions)
//think about state
//keep track of questions
class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };
  }
  componentDidMount() {
    fetch(this.props.getQuestions)
      .then(res => res.json())
      .then((res) => this.setState({ questions: res }))
      .catch((error) => {
        console.log(`There is an ${error} when mounting Quiz component`);
      }
      )
  };

  render() {
    console.log(this.state.questions)
    const array = [];
    for (let i = 0; i < this.state.questions.length; i++) {
      array.push(<Question id={`id: ${i}`} key={`key:${i}`} questions={this.state.questions[i]} />)
    }
    return (
      <div>
        <div>
          <h1>ANIME CAT QUIZ</h1>
        </div>
        <div>
          {array}
        </div>
      </div>
    );
  }
}

export default Quiz;
