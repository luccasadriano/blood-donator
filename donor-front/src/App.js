import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes';


class App extends Component {
  render() {
      return (
          <Router>
              <div>
                  <Routes/>
              </div>
          </Router>
      );
  }
}

export default App;
