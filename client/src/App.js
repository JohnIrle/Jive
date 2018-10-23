import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

import { Provider } from 'react-redux';
import store from './store';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Landing from './pages/Landing';
import PlanTomorrow from './pages/PlanTomorrow';
import PlanNow from './pages/PlanNow';
import About from './pages/About';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Check for token

if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/plantomorrow" component={PlanTomorrow} />
            <Route exact path="/plannow" component={PlanNow} />
            <Route exact path="/about" component={About} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
