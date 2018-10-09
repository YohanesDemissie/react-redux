import React, { Component } from 'react'
import '../styles/aboutUs.css'
import '../App.css';
import lendMe from '../images/lendMe.png';
import screenShot from '../images/screenShot.png'
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
          <h2>
            We Created LendMe with the intent of bringing communities together, building selfsucficient enviornents, turning neighbors to helpful members of their community.
          </h2>

          <p className="about-ceo-quote">
            "As someone who struggled through college with little support on such a big campus, I want to make sure students have the necessary resources to succeed in their academic endeavours while bring a large campus of various diversitites, together"
            <br />
              -Amanuail Mekonen, Proud Founder and CEO
          </p>

          <section className="team-bio">
            <h1>
              Our Team
            </h1>

            <hr />

            <div style={styles.inlineLayout}>
            <h2 className="dev-names">
              Amanuail Mekonen, <br /> CEO
          </h2>
              <img style={styles.img} src="https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450" alt="panda" />
            <p className="dev-bio">
              After graduating from the University of Tennessee with a degree in political science, Amanda spent 15 years managing and coordinating local, state, and federal campaigns for a wide spectrum of candidates on Capitol Hill and K Street. As a master’s candidate at Harvard University, she became fascinated by the capacity of game theory to disentangle the complexities of human behavior and the application of game theory to location based dating.
          </p>
          </div>

            <div style={styles.inlineLayout}>
            <h2 className="dev-names">
              Lee Carter, <br /> Lead Developer
          </h2>
              <img style={styles.img} src="https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450" alt="panda" />
            <p className="dev-bio">
              After graduating from the University of Tennessee with a degree in political science, Amanda spent 15 years managing and coordinating local, state, and federal campaigns for a wide spectrum of candidates on Capitol Hill and K Street. As a master’s candidate at Harvard University, she became fascinated by the capacity of game theory to disentangle the complexities of human behavior and the application of game theory to location based dating.
          </p>
            </div>

            <div style={styles.inlineLayout}>
            <h2 className="dev-names">
              Michael Jackson, <br />Developer
          </h2>
              <img style={styles.img} src="https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450" alt="panda" />
            <p className="dev-bio">
              After graduating from the University of Tennessee with a degree in political science, Amanda spent 15 years managing and coordinating local, state, and federal campaigns for a wide spectrum of candidates on Capitol Hill and K Street. As a master’s candidate at Harvard University, she became fascinated by the capacity of game theory to disentangle the complexities of human behavior and the application of game theory to location based dating.
          </p>
          </div>

            <div style={styles.inlineLayout}>
            <h2 className="dev-names">
              Yohanes Demissie, <br />Developer
          </h2>
              <img style={styles.img} src="https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450" alt="panda" />
            <p className="dev-bio">
              After graduating from the University of Tennessee with a degree in political science, Amanda spent 15 years managing and coordinating local, state, and federal campaigns for a wide spectrum of candidates on Capitol Hill and K Street. As a master’s candidate at Harvard University, she became fascinated by the capacity of game theory to disentangle the complexities of human behavior and the application of game theory to location based dating.
          </p>
          </div>
          {/* <img className="screenShot" src={screenShot} alt="mobile screen" /> */}
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
    borderStyle: 'solid',
    borderColor: 'black',
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
