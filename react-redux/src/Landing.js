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
            <input className="emailInput" placeholder="email@lendme.edu" />
            <br />
            <button className="submitEmail">Submit</button>
          </section>

          <div style={appStores}>
            <section style={appStoresStyle}>
              <h4 className="comingSoon">Available to</h4>
              <img className="appStores" style={appImages} src={appleAppStore} alt="app stores logos" />
            </section>

            <section style={appStoresStyleTwo}>
              <h4 className="comingSoonTwo">Coming soon to</h4>
              <img style={appImages} className="appStores" src={googlePlay} alt="google play icon" />
            </section>
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
          <p className="rulesText">
            <b>Keep it Academic -</b> Not like the other “Academic”, LendMe is a place for students to post their skill-sets
            and academic success along with classes/subjects one may need help with. LendMe is not a place to
            spread social gossip, slander, or inappropriate behavior. We carry a zero tolerance behind this rule and
            once discovered, the acting student will be served a lifetime ban from using LendMe, and any and all
            LendMe Inc. provided services.
          </p>
      </div>
      <br />

        <section className="landingSubFooter">
          <img src={moneyIcon} alt="money icon" style={moneyIconStyle} />
          <p className="rulesText">
            <b>No scrubs -</b> If we find that students are beginning to manipulate the services provided by LendMe,
            especially if the tutors provided are being taken advantage of as a result – this could mean students
            bringing on friends/other students while only paying for one to one sessions, excessive cancellations/no
            shows, will be subject to consequences and possible probationary periods. Time is valuable for both
            parties.
          </p>
      </section>
        <br />


        <section className="landingSubFooter">
          <img src={moneyIcon} alt="money icon" style={moneyIconStyle}/>
          <p className="rulesText">
            <b>SAFETY – We’re putting this in bold because this is our number one priority. If at any time we have
            received a report of any form of sexual assault, harassment, and/or violent behavior, our offices will
            not take this position lightly. We will not only make sure you banned across all our platforms, but we
            will also provide an attorney for the victim(s) and assist local law enforcements and authorities to
            make sure you and/or the involved parties will not be seeing the light of day any time soon. We will
            make sure you do not receive a simple 90-day probationary period like other justice systems have
            permitted (because frankly, we don’t care if the sentence will hinder your future, your act was forever
            life-changing for the victim). We will pursue the maximum sentences not only in criminal court, but
            also in civil court in pursuit of restitution. WE-DON’T-PLAY-PERIOD.
            </b>
          </p>
        </section>
        <br />

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
  float: 'left',
  width: '100px',
  marginLeft: 20,
  // overFlow: 'auto',
  verticalAlign: 'middle',
  // marginRight: 20
},

hrStyle = {
  width: '70%'
},

appStores = {
  textAlign: 'center',
  verticalAlign: 'middle',
},

appStoresStyle = {
  paddingTop: 20,
  paddingRight: 20,
  display: 'inline-block',
  // textAlign: 'center',
  verticalAlign: 'middle',
  overFlow: 'auto',
},

appStoresStyleTwo = {
  // borderLeft: 'solid',
  // padding: 5,
  paddingLeft: 20,
  

  margin: 'auto',
  display: 'inline-block',
  textAlign: 'center',
  verticalAlign: 'middle',
  overFlow: 'auto',
  paddingTop: 10,
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