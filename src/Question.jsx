import React, { Component } from 'react';

class Question extends Component {

  render() {
    return (
      <div>
        <div>
          {this.props.questions.question}
        </div>
        <button>{this.props.questions.answerOne}</button>
        <button>{this.props.questions.answerTwo}</button>
        <button>{this.props.questions.answerThree}</button>
        <button>{this.props.questions.answerFour}</button>
      </div>
    )
  }
}

export default Question;