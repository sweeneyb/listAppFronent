import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.  Woo!
        </p>
      </div>
    );
  }

  componentWillMount() {
    console.log("in will mount")
    fetch("/listItems")
    .then(handleErrors)
    .then(res => {return res.json})
    .then(res => console.log(res) )
    // .then(res => console.log(res['body']))
    // .then(res => console.log(res.body))
    console.log("done fetching")
  }

  
}
// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
     throw Error(response.statusText);
  }
  return response;
}

export default App;
