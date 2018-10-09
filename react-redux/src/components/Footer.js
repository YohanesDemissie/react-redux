import React, { Component } from 'react';
import '../App.css';
import facebookIcon from '../images/facebook-icon.png';
import twitterIcon from '../images/twitter-icon.png';
import instagramIcon from '../images/instagram-icon.png';

class Footer extends Component{
  render() {
    return(
      <div style={style.icons}>
        <a href="https://www.facebook.com/LendMe-Inc-1612498605521475/" target="_blank"><img style={style.sizes} src={facebookIcon} alt="facebook icon" /></a>
        <a href="https://www.instagram.com/lendme_inc/" target="_blank"><img style={style.sizes} src={instagramIcon} alt="instagram icon" /></a>
        <a href="https://twitter.com/LendMeInc" target="_blank"><img style={style.sizes} src={twitterIcon} alt="twitter icon" /></a>
      </div>
    )
  }
}

const style = {
  icons: {

    marginBottom: 10,
    display: 'inline',
    marginLeft: '45%',
    marginRight: 20,
    marginTop: 10,
    maxWidth: 10,
  },

  sizes: {
    width: 30,
    margin: 10
  }
}

export default Footer;