import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; //New update errors until further notice

import AboutUs from './components/AboutUs';
import Landing from './Landing';
import Mission from './components/Mission';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Route exact path='/' component={Landing} />
            <Route exact path='/about' component={AboutUs} />
            <Route exact path='/mission' component={Mission} />
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
