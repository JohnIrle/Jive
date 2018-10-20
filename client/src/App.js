import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Register from "./pages/Register";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
      </div>
      </Router>
    );
  }
}

export default App;
