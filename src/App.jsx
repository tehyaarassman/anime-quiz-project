import React, { Component } from 'react';
import ReactDom from "react-dom";
// import '.styles.scss';
import Quiz from "./Quiz.jsx";

class App extends Component{
  constructor(props){
    super(props);
  
  }
  render() {
    <Quiz />
  }
}
ReactDom.render(<Quiz />, document.getElementById('app'));


export default App;