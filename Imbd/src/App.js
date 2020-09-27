import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

//importing all files
import './App.css';

import Navbar from './components/layout/Navbar';
import SignIn from './components/home/SignIn';
import SignUp from './components/home/SignUp';
import Footer from './components/layout/Footer';

import Landing from './components/home/Landing';
import Movie from './components/home/Movie';

import store from './store';
//creating App class component
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            {/* routing */}
            <Route exact path="/" component={Landing} />
            <Route exact path="/movie/:id" component={Movie} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

//exporting
export default App;