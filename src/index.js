console.log('hello');
import App from './App.jsx';
import styles from './/styles.scss';
import { render } from "react-dom";
import React from 'react';

render(
  <App />,
  document.getElementById('app')
);