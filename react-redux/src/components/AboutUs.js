import React, { Component } from 'react'
import '../styles/aboutUs.css'
import '../App.css';
import lendMe from '../images/lendMe.png';
import Amanuail from '../images/amanuail.jpg';
import Nancy from '../images/Nancy-Pappas.png';
import Yohannes from '../images/Yohannes-Tsega.png';
import Chris from '../images/Chris-Smith.jpg';
import Footer from './Footer.js'

class AboutUs extends Component {
  render(){
    return(
      <div>
        <section className="header">
          <header>
            <nav>
              <ul>
                <li>
                  <a href="/" alt="home link" style={styles.logoNav}><img className="headerImg" src={lendMe} alt="LendMeInc. Logo" align="middle" /><b >LendMe</b></a>
                </li>
                <li className="links" style={styles.nav}>
                  <a href="/about" alt="about us link" style={styles.nav}><b>about us</b></a>
                </li>
                <li className="links" style={styles.nav}>
                  <a href="/mission" alt="team mission link" style={styles.nav}><b>mission</b></a>
                </li>
              </ul>
            </nav>
          </header>

          <a href="/" alt="home link"><img className="mainLogo" src={lendMe} alt="LendMeInc. Logo" /></a>

          <h1 className="mainTitle">
            LendMe Inc.
          </h1>

        </section>

        <section className="about-us-body">
          <h2 className="aboutLM-intro">
            We Created LendMe with the intent of bringing communities together, building self-sufficient environments, turning neighbors to helpful members of their community.
          </h2>

          <p className="about-ceo-quote" style={styles.borderStyle}>
            "As someone who struggled through college with little support on such a big campus, I want to make sure students have the necessary resources to succeed in their academic endeavors while bringing a large campus of various diversities, together"
            <br />
            <br />
              -Amanuail Mekonnen, Founder &amp; CEO
          </p>

          <section className="team-bio">
            <h1>
              Our Team
            </h1>

            <hr width="70%"/>

            <div style={styles.inlineLayout}>
            <h2 className="dev-names">
                Amanuail Mekonnen, <br /> Founder &amp; CEO
          </h2>
              <img style={styles.img} src={Amanuail} width="200" alt="Amanuail Ambaye" />
            <p className="dev-bio">
              Amanuail is a strong-willed individual from Seattle. A paralegal, Amanuail is also
              Chairman of Seafair&#39;s Community Relations Committee. Responsible for designing &amp;
              constructing the user experience of LendMe, Amanuail’s dedication towards LendMe
              Inc. and it’s mobile application LendMe continues to strengthen with the determination
              and commitment of a true leader. With multiple evolution&#39;s nearing their completions,
              the potential growth of the LendMe Inc. company will soon come to fold.
          </p>
          </div>


            <div style={styles.inlineLayout}>
              <h2 className="dev-names">
                Yohannes Tsegay, <br />Senior Executive Adviser
          </h2>
              <img style={styles.img} src={Yohannes} width="200" alt="panda" />
              <p className="dev-bio">
                With multiple stops at up and coming tech startups, to becoming a software engineer
                for Microsoft, Yohannes now holds as a Senior Executive Director position at Ebay.
              </p>
            </div>


            <div style={styles.inlineLayout}>
              <h2 className="dev-names">
                Chris Smith, <br />Senior Executive Adviser
          </h2>
              <img style={styles.img} src={Chris} width="200" alt="panda" />
              <p className="dev-bio">
                With an abundance of executive-held positions on Boeing's 737, 777, &amp; 787 teams
                throughout his career, Chris also owns TaylorMade Construction Company based in
                Seattle, WA
          </p>
            </div>


            <div style={styles.inlineLayout}>
            <h2 className="dev-names">
                Nancy Pappas, <br /> Senior Marketing Adviser
          </h2>
              <img style={styles.img} src={Nancy} width="200" alt="panda" />
            <p className="dev-bio">
              With over a decade of marketing experience under her belt, Nancy brings her expertise
              from Macy&#39;s, Alaska Airlines, &amp; school districts across Washington.
            </p>
            </div>

          </section>
        </section>
        <Footer />
      </div>
    )
  }
}

const styles = {
  borderStyle: {
    borderRadius: 20,
    borderWidth: 4,
    borderStyle: 'none',
    backgroundColor: 'rgba(255, 165, 0, 0.3)',
    padding: 50,
  },

  inlineLayout: { // TODO: display text and image, inline
    marginR: 100,
    marginBottom: 20,
    textAlign: 'center',
    overFlow: 'auto'
  },

  img: {
    marginRight: 10,
    borderRadius: 20,
  },

  nav: {
    textDecoration: 'none',
    color: ' rgb(255, 165, 0)',
    backgroundColor: 'rgba(255, 255, 255)',
    borderRadius: 20,
    borderWidth: 15,
    borderStyle: 'none',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 2
  },

  logoNav: {
    textDecoration: 'none',
    color: ' rgb(255, 165, 0)',
    backgroundColor: 'rgba(255, 255, 255)',
    paddingLeft: 10,
    paddingRight: 25,
    paddingBottom: 1,
    paddingTop: 1,
    borderRadius: 20
  }
};

export default AboutUs
