import React, { Component } from 'react'
import '../styles/aboutUs.css'
import '../App.css';
import lendMe from '../images/lendMe.png';
import screenShot from '../images/screenShot.png'

class AboutUs extends Component {
  render(){
    return(
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <img className="headerImg" src={lendMe} alt="LendMeInc. Logo" align="middle" /><b>LendMe</b>
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

          <h1>
            Our Team
          </h1>

          <hr />

          <h2 className="dev-names">
            Amanuail Mekonen, <br /> CEO
          </h2>
          <p className="dev-bio">
            After graduating from the University of Tennessee with a degree in political science, Amanda spent 15 years managing and coordinating local, state, and federal campaigns for a wide spectrum of candidates on Capitol Hill and K Street. As a master’s candidate at Harvard University, she became fascinated by the capacity of game theory to disentangle the complexities of human behavior and the application of game theory to location based dating.
          </p>

          <h2 className="dev-names">
            Lee Carter, <br /> Lead Developer
          </h2>
          <p className="dev-bio">
            After graduating from the University of Tennessee with a degree in political science, Amanda spent 15 years managing and coordinating local, state, and federal campaigns for a wide spectrum of candidates on Capitol Hill and K Street. As a master’s candidate at Harvard University, she became fascinated by the capacity of game theory to disentangle the complexities of human behavior and the application of game theory to location based dating.
          </p>

          <h2 className="dev-names">
            Michael Jackson, <br />Developer
          </h2>
          <p className="dev-bio">
            After graduating from the University of Tennessee with a degree in political science, Amanda spent 15 years managing and coordinating local, state, and federal campaigns for a wide spectrum of candidates on Capitol Hill and K Street. As a master’s candidate at Harvard University, she became fascinated by the capacity of game theory to disentangle the complexities of human behavior and the application of game theory to location based dating.
          </p>

          <h2 className="dev-names">
            Yohanes Demissie, <br />Developer
          </h2>
          <p className="dev-bio">
            After graduating from the University of Tennessee with a degree in political science, Amanda spent 15 years managing and coordinating local, state, and federal campaigns for a wide spectrum of candidates on Capitol Hill and K Street. As a master’s candidate at Harvard University, she became fascinated by the capacity of game theory to disentangle the complexities of human behavior and the application of game theory to location based dating.
          </p>


          <img className="screenShot" src={screenShot} alt="mobile screen" />
        </section>
      </div>
    )
  }
}

export default AboutUs
