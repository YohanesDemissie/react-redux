import React, { Component } from 'react';

import lendMe from '../images/lendMe.png';
import '../App.css';
import Footer from './Footer'

class Mission extends Component {
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
                <a href="/about" alt="about us link">about</a>
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

          <p>
          Our mission at #open goes beyond just dating or hooking up—we're working to create a community where people can create genuine connections.
          </p>

          <p style={styles.borderStyle}>
            And we're hoping to make the world a little better, while we're at it.
          </p>

        <section className="about-us-body">
          <h2>
            Our Values
          </h2>
          <hr />

          <div style={styles.inlineLayout}>
            <h3>Inclusion</h3>
            <p>
              <img style={styles.img} src="https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450" alt="panda" />
              #open is dedicated, first and foremost, to being inclusive: to accepting people of all gender identities and orientations, from all walks of life, in any sort of relationship that makes you happy, no matter what gets you going
            </p>
          </div>

          <div style={styles.inlineLayout}>
            <h3>Community</h3>
            <p>
              <img style={styles.img} src="https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450" alt="panda" />
              To provide that freedom, #open has to be more than just a dating app–it has to be a community. Maintaining a community requires more than just showing up! We all rely upon each other to ensure that our community remains inclusive, accepting, and friendly.            </p>
          </div>

          <div style={styles.lastPicture}>
            <h3>Education</h3>
            <p>
              <img style={styles.img} src="https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450" alt="panda"/>
                Finally, reaching beyond the bounds of our community, we are committed to making the society in which we all reside a better place by producing research and providing education relating to human relationships, human sexuality, gender identity, and the ways in which we can best protect vulnerable populations both inside and outside of our community.            </p>
          </div>

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
    padding: 50
  },

  inlineLayout: {
    marginBottom: 250,
    textAlign: 'center',
    overFlow: 'auto',
    backgroundColor: 'orange'
  },

  img: {
    float: 'right',
  },

  lastPicture: {
    marginBottom: 120,
    textAlign: 'center',
    overFlow: 'auto',
    backgroundColor: 'orange'
  }

};


export default Mission;