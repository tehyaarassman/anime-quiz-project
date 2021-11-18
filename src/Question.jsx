import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div className={'outer-question'}>
        <h3 className={'question'}>{this.props.questions.question}</h3>
        <div className={'question-div'}>
          <button id={'buttonOne'} onClick={this.props.handleClickOne}>{this.props.questions.answerOne}</button>
        <button id={'buttonTwo'} onClick={this.props.handleClickTwo}>{this.props.questions.answerTwo}</button>
        <button id={'buttonThree'} onClick={this.props.handleClickThree}>{this.props.questions.answerThree}</button>
        <button id={'buttonFour'} onClick={this.props.handleClickFour}>{this.props.questions.answerFour}</button>
      </div>
      </div>
    )
  }
}

export default Question;