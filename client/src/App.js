import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PlanTomorrow from "./pages/PlanTomorrow";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/home" component={ Home } />
        <Route exact path="/plantomorrow" component={ PlanTomorrow } />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
