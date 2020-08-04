import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Profile from "./components/Profile";
// import QuizHeading from './components/quizCentralHeader';
// import QuizCards from './components/quizCards'; 
// import Share from './components/Share';
import Test from './pages/Test';
import './App.css';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
  // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());
      // Redirect to login
      window.location.href = "./login";
    }
  }


class App extends Component {
    render() {
    return (
        <Provider store={store}>
        <Router>
        <Navbar />
        <div className='container'>
        <Route exact path="/" component={Test} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
        </div>
        <Footer />
        </Router>
        </Provider>
    );
}
}

export default App;
