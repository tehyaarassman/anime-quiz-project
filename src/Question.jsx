import React, { Component } from 'react';

class Question extends Component {

  render() {
    return (

      <div id={this.props.id}>
        {this.props.questions.question}
      </div>
    )
  }
}

export default Question;