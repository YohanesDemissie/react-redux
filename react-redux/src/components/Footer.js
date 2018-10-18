import React, { Component } from 'react';
// import '../App.css';
import facebookIcon from '../images/facebook-icon.png';
import twitterIcon from '../images/twitter-icon.png';
import instagramIcon from '../images/instagram-icon.png';

class Footer extends Component{
  render() {
    return(
      <div  className="footer-comp" style={stylish}>
        <a href="https://www.facebook.com/LendMe-Inc-1612498605521475/" target="_blank"><img style={style.sizes} src={facebookIcon} alt="facebook icon" /></a>
        <a href="https://www.instagram.com/lendme_inc/" target="_blank"><img style={style.sizes} src={instagramIcon} alt="instagram icon" /></a>
        <a href="https://twitter.com/LendMeInc" target="_blank"><img style={style.sizes} src={twitterIcon} alt="twitter icon" /></a>
        <p style={copyRight}>&copy; LendMe Inc.</p>
        <a style={footerLinks} href="https://termsfeed.com/privacy-policy/70907199871db6348be84738975e5c75">Privacy Policy |</a>
        <a style={footerLinks} href="https://termsfeed.com/terms-use/f3004ee240c09ad7cdeda64c0ba0e5ba">Terms and Use</a>
      </div>
    )
  }
}

const style = {
  sizes: {
    width: 30,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,

  }
}

const stylish = {
  textAlign: 'center',
}

const copyRight = {
  fontSize: '15px',
  marginTop: 10,
  marginBottom: 5
}

const footerLinks = {
  fontSize: '15px',
  textDecoration: 'none',
  color: 'black',
  marginRight: 5,
  marginTop: 0,
  background: 'orange',
  width: 100

}
export default Footer;