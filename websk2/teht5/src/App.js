import React, {Component} from 'react';
import './App.css';
import Main from './Main';

class App extends Component {

  constructor(props) {
    super(props);

  }

  render() {

    return (
      <section id="main-section">
        <h2>3 Questions</h2>
        <Main />
      </section>
    );
  }
}

export default App;
