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
        <header>
          <nav>
            <ul>
              <li>
                <a href="/" alt="home link"><img className="headerImg" src={lendMe} alt="LendMeInc. Logo" align="middle" /><b>LendMe</b></a>
              </li>
              <li className="links">
                <a href="about.js" alt="about us link">about</a>
              </li>
              <li className="links">
                <a href="mission" alt="team mission link">mission</a>
              </li>
            </ul>
          </nav>
        </header>

        <a href="/" alt="home link"><img className="mainLogo" src={lendMe} alt="LendMeInc. Logo" /></a>

        <h1 className="mainTitle">
          LendMe Inc.
        </h1>

        <section className="about-us-body">
          <h2 className="aboutLM-intro">
            We Created LendMe with the intent of bringing communities together, building self-sufficient environments, turning neighbors to helpful members of their community.
          </h2>

          <p className="about-ceo-quote" style={styles.borderStyle}>
            "As someone who struggled through college with little support on such a big campus, I want to make sure students have the necessary resources to succeed in their academic endeavors while bring a large campus of various diversities, together"
            <br />
            <br />
              -Amanuail Mekonen, Proud Founder and CEO
          </p>

          <section className="team-bio">
            <h1>
              Our Team
            </h1>

            <hr width="70%"/>

            <div style={styles.inlineLayout}>
            <h2 className="dev-names">
                Amanuail Mekonen, <br />  Proud Founder and CEO
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
      borderWidth: 4,
      borderStyle: 'none',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      color: 'rgba(0, 0, 0, 0.7)',
      padding: 50,
  },

  inlineLayout: {
    marginR: 100,
    marginBottom: 20,
    textAlign: 'center',
    overFlow: 'auto'
  },

  img: {
    marginRight: 10,
  }
};

export default AboutUs
