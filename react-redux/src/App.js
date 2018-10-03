import React, { Component } from 'react';
import './App.css';
import lendMe from '../src/images/lendMe.png';
import appStores from '../src/images/appStores.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <img className="headerImg" src={lendMe} alt="LendMeInc. Logo" />
              </li>
              <li>
                <a href="events.js" alt="events link"> events</a>
              </li>
              <li>
                <a href="about.js" alt="about us link">about</a>
              </li>
              <li>
                <a href="mission" alt="team mission link">mission</a>
              </li>
            </ul>
          </nav>
        </header>

        <img className="mainLogo" src={lendMe} alt="LendMeInc. Logo" />

        <h1 className="mainTitle">
          LendMeInc.
        </h1>

        <h4 className="subHeader">Sign up for beta and get updates about launch:</h4>
        <input className="emailInput" placeholder="email@lendme.com"/>
        <br />
        <button className="submitEmail">Submit</button>

        <h4 className="comingSoon">Coming soon to</h4>
        <img className="appStores" src={appStores} alt="app stores logos"/>
      </div>
    );
  }
}

export default App;
