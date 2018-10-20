import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
          <div className="App">
           <NavBar />
            <Route exact path="/" component={ Login } />
            <Route exact path="/register" component={ Register } />
            <Footer />
          </div>
        </Router>
      </Provider>

    );
  }
}

export default App;
