import React, { Component } from 'react';
import Question from './Question.jsx';
import Modal from './Modal.jsx';
import img1 from './images/cat3.jpeg'
// import "/styles.scss";
//change to class component???
//use life cycle??? to fetch?>???---component did mount(set up fetch to /questions)
//think about state
//keep track of questions
class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      questions: [],
      answerOne: 0,
      answerTwo: 0,
      answerThree: 0,
      answerFour: 0
    };
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
    this.handleClickFour = this.handleClickFour.bind(this);
    this.handleClickSubmit = this.handleClickSubmit.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleClickOne() {
    this.setState(prevState => {
      return {
        answerOne: prevState.answerOne+1
      }
    })
    console.log(this.state.answerOne);
  }
  handleClickTwo() {
    this.setState(prevState => {
      return {
        answerTwo: prevState.answerTwo+1
      }
    })
    console.log(this.state.answerTwo)
  }
  handleClickThree() {
    this.setState(prevState => {
      return {
        answerThree: prevState.answerThree+1
      }
    })
    console.log(this.state.answerThree)
  }
  handleClickFour() {
    this.setState(prevState => {
      return {
        answerFour: prevState.answerFour+1
      }
    })
    console.log(this.state.answerFour)
  }
  handleClickSubmit() {

  }

  render() {
    const array = [];
    for (let i = 0; i < this.state.questions.length; i++) {
      array.push(<Question handleClickOne={this.handleClickOne} handleClickTwo={this.handleClickTwo} handleClickThree={this.handleClickThree} handleClickFour={this.handleClickFour} key={this.state.questions[i]._id} questions={this.state.questions[i]} />)
    }
    return (
      <div className={'outerContainer'}>
        <div className={'title-div'}>
          <h1 className={'title'}>ANIME CAT QUIZ</h1>
        </div>
        <img className={'naruto-img'} src={img1}></img>
        <div>
          {array}
        </div>
        <form >
        <Modal prop={this.state} show={this.state.show} handleClose={this.hideModal}>
          <p className={'modal-header'}>RESULTS</p>
        </Modal>
        <button className={'submitBtn'} type="button" onClick={this.showModal}>Submit Quiz</button>
        </form>
      </div>
    );
  }
}

export default Quiz;