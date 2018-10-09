import React, { Component } from 'react';

import './App.css';
import lendMe from '../src/images/lendMe.png';
import appStores from '../src/images/appStores.png';
import screenShot from '../src/images/screenShot.png';
import Footer from './components/Footer';

class Landing extends Component {
  render() {
    return(
      <div>
      <header>
        <nav>
          <ul>
            <li>
                <a href="/" alt="home link"><img className="headerImg" src={lendMe} alt="LendMeInc. Logo" align="middle" /><b>LendMe</b></a>
            </li>
              <li className="links">
              <a href="/about" alt="about us link">about us</a>
            </li>
              <li className="links">
              <a href="/mission" alt="team mission link">mission</a>
            </li>
          </ul>
        </nav>
      </header>

        <a href="/" alt="home link"><img className="mainLogo" src={lendMe} alt="LendMeInc. Logo" /></a>

      <h1 className="mainTitle">
        LendMe Inc.
        </h1>

      <h4 className="subHeader">Sign up for beta and get updates about launch:</h4>
      <section className="signUp">
        <input className="emailInput" placeholder="email@lendme.com" />
        <br />
        <button className="submitEmail">Submit</button>
      </section>

      <h4 className="comingSoon">Coming soon to</h4>
      <img className="appStores" src={appStores} alt="app stores logos" />

      <section className="footer">
        <p className="welcomeText">
          <b>Welcome to LendMe Inc., a community based application built to reach out to bond communities and lend a helping hand.</b>
        </p>

        <span>
          <p style={styles}>
            <b>Whether solo or partnered, LendMe allows you to self-identify, express your preferences and boundaries, and find others who are into whatever you're into.</b>
          </p>
          <img className="screenShot" src={screenShot} alt="application screenshot" />
        </span>

      </section>
      <Footer />
      </div>
    )
  }
}

const styles = {
    borderWidth: 4,
    borderStyle: 'none',
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    color: 'rgba(0, 0, 0, 0.6)',
    padding: 50
  };

export default Landing;