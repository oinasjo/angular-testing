import React, {Component} from 'react';
import './App.css';
import { NavBar } from './NavBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar title="Ihmeen juhlat" />
      </div>
    );
  }
}

export default App;