import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.questions.question}
        </div>
        <button id={'buttonOne'} onClick={this.props.handleClickOne}>{this.props.questions.answerOne}</button>
        <button id={'buttonTwo'} onClick={this.props.handleClickTwo}>{this.props.questions.answerTwo}</button>
        <button id={'buttonThree'} onClick={this.props.handleClickThree}>{this.props.questions.answerThree}</button>
        <button id={'buttonFour'} onClick={this.props.handleClickFour}>{this.props.questions.answerFour}</button>
      </div>
    )
  }
}

export default Question;