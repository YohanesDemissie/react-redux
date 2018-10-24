import React, { Component } from 'react';

import lendMe from '../images/lendMe.png';
import collegeCollab from '../images/college-collage.jpg'
import '../App.css';
import Footer from './Footer'

class Mission extends Component {
  render() {
    return(
      <div>
        <section className="footer-comp">
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
          <hr width='700' />

          <div style={styles.inlineLayout}>
            <h3>Inclusion</h3>
            <p>
              <img style={styles.img} src={collegeCollab} alt="panda" />
              At LendMe, it is vital that we cover all different aspects of what our society views as a “college student”.
              We are not focusing solely on the student that is taking 12-15 credits a quarter/semester and walking to
              and from their respective college dorms/fraternity – LendMe is here for the students taking on multiple
              lead roles in their respective clubs; for the students who have to go in for their day/evening shifts
              immediately after class—as well as the ones who just got off from the night before. Regardless of the
              student-dynamics, LendMe will assist to cover them all.
            </p>
          </div>

          <div style={styles.inlineLayout}>
            <h3>Community</h3>
            <p>
              <img style={styles.img} src="https://www.telegraph.co.uk/content/dam/news/2016/08/23/106598324PandawaveNEWS_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=450" alt="panda" />
              LendMe’s immediate focus, is to not only bring together a community that carries the norm hustle &amp;
              grind, while sharing the same passion every Saturday – but to also help build a network outside of one’s
              collegiate year without the worry and concern of job-hunting, career climbing, and missed
              opportunities. We understand that many students enter college not knowing what major to apply for, or
              even a career to pursue. We also understand that those passions don’t necessarily come to light until
              the 3 rd or 4 th year in—an area where most students tend to hit the panic button. As LendMe grows, we
              will focus more to solve these areas by offering internships, job-shadowing, and consultation
              opportunities within areas of each student’s interests. Our goal is to replace the valuable time a college
              student faces with a pipeline that leads to their goals through peer-tutoring, network building, and
              efficiency.
            </p>
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
    borderRadius: 20,
    borderWidth: 4,
    borderStyle: 'none',
    backgroundColor: 'rgba(255, 165, 0, 0.3)',
    padding: 50,
  },

  inlineLayout: {
    textAlign: 'center',
  },

  img: {
    borderRadius: 20,
    float: 'right',
    width: '200px',
    marginLeft: 20,
    wordWrap: 'break-word',

  },

  //place media query for excessive space between top/bottom margin with the image/text sections

  lastPicture: {
    marginBottom: 120,
    textAlign: 'center',
    overFlow: 'auto',
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


export default Mission;