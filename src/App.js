import React, { Component } from 'react';
import './App.css';
import Numbers from './components/Numbers/Numbers'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Number Guessing Web App</h1>
        <Numbers/>
      </div>
    )
  }
}

export default App
