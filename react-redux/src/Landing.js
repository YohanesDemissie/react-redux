import React, { Component } from 'react';
import './App.css';
import lendMe from '../src/images/lendMe.png';
import appleAppStore from '../src/images/apple-appstore-icon.png';
import googlePlay from '../src/images/google-play.png'
import screenShot from '../src/images/screenShot.png';
import Footer from './components/Footer';
import moneyIcon from '../src/images/money-icon.png'

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

          <div style={appStoresStyle}>
            <h4 className="comingSoon">Available to</h4>
            <img className="appStores" style={appImages} src={appleAppStore} alt="app stores logos" />
          </div>

          <div style={appStoresStyle}>
            <h4 className="comingSoon">Coming soon to download on</h4>
            <img style={appImages} className="appStores" src={googlePlay} alt="google play icon" />
          </div>
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
      <h2>Our Rules</h2>
        <hr style={hrStyle}/>

      <div className="landingSubFooter">
          <img src={moneyIcon} alt="money icon" style={moneyIconStyle} />
          <b>Academic Subjects</b> they are good at, as well as the teacher they took certain classes
      </div>

        <section className="landingSubFooter">
          <img src={moneyIcon} alt="money icon" style={moneyIconStyle} />
          <b>Everyday Activities</b> such as moving, hauling, ride sharing, etc.
      </section>

        <section className="landingSubFooter">
          <img src={moneyIcon} alt="money icon" style={moneyIconStyle}/>
          <b>Quick, Easy, and Fast</b>
        </section>

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

logoNav = {
  textDecoration: 'none',
  color: ' rgb(255, 165, 0)',
  backgroundColor: 'rgba(255, 255, 255)',
  paddingLeft: 10,
  paddingRight: 25,
  paddingBottom: 1,
  paddingTop: 1,
  borderRadius: 20
},

moneyIconStyle ={
  width: 50,
  textAlign: 'center',
  overFlow: 'auto',
  verticalAlign: 'middle',
  marginRight: 20
},

hrStyle = {
  width: '50%'
},

appStoresStyle = {
  textAlign: 'center',
  verticalAlign: 'middle',
  overFlow: 'auto',
},

appImages = {

  textAlign: 'center',
  overFlow: 'auto',
  verticalAlign: 'middle',
  marginLeft: 20
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