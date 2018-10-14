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
        <section className="header">
          <header>
            <nav>
              <ul>
                <li>
                  <a href="/" alt="home link" style={logoNav}><img className="headerImg" src={lendMe} alt="LendMeInc. Logo" align="middle" /><b >LendMe</b></a>
                </li>
                <li className="links" style={nav}>
                  <a href="/about" alt="about us link" style={nav}><b>about us</b></a>
                </li>
                <li className="links" style={nav}>
                  <a href="/mission" alt="team mission link" style={nav}><b>mission</b></a>
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
        </section>

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
      <p style={styles}>
        #open is dedicated to maintaining a safer environment where everyone can be themselves.
      </p>
      <Footer />
      </div>
    )
  }
}

const styles = {
  borderRadius: 20,
  borderWidth: 4,
  borderStyle: 'none',
  borderColor: 'black',
  background: 'rgba(255, 165, 0, 0.3)',
  color: 'rgba(0, 0, 0, 0.6)',
  padding: 50
},

nav = {
  textDecoration: 'none',
  color:' rgb(255, 165, 0)',
  backgroundColor: 'rgba(255, 255, 255)',
  borderRadius: 20,
  borderWidth: 15,
  borderStyle: 'none',
  paddingLeft: 10,
  paddingRight: 10,
  paddingTop: 2
},

logoNav= {
  textDecoration: 'none',
  color: ' rgb(255, 165, 0)',
  backgroundColor: 'rgba(255, 255, 255)',
  paddingLeft: 10,
  paddingRight: 25,
  paddingBottom: 1,
  paddingTop: 1,
  borderRadius: 20
}

export default Landing;

// var index = 1;
// showImage(1);

// function plusIndex(n) {
//   index = index + 1;
//   showImage(index);
// }

// function showImage(n) {
//   var imagelist = document.getElementsByClassName("slideImage");
//   if (n > imagelist.length) { index = 1; }
//   if (n < 1) { index = imagelist.length; }

//   for (var i = 0; i < imagelist.length; i++) {
//     imagelist[i].style.display = "none";
//   }

//   imagelist[index - 1].style.display = "block";

// }

// autoSlide();
// function autoSlide() {
//   var imagelist = document.getElementsByClassName("slideImage");
//   for (var i = 0; i < imagelist.length; i++) {
//     imagelist[i].style.display = "none";
//   }
//   if (index > imagelist.length) { index = 1 }

//   imagelist[index - 1].style.display = "block";
//   index++;

//   setTimeout(autoSlide, 3000);
// }