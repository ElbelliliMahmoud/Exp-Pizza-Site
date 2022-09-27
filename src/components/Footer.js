import React from 'react';
import '../styles/Footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function Footer() {
  return (
    <div className='footer'>
      <div className="socialMedia">
        <InstagramIcon />
        <TwitterIcon/>
        <FacebookIcon/>
        <LinkedInIcon/>
      </div>
      <p>&copy; 2022 mahmoud.elbellili@gmail.com</p>
    </div>
  )
}

export default Footer