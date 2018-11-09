import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './containers/Home.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <script src="https://d3js.org/d3.v5.min.js"></script>
        <header className="App-header"></header>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    );
  }
}

export default App;
