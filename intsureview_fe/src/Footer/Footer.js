import * as React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './Footer.css'

const Footer = () => {
  // Here and in the header I'm intentionally using html elements, instead of MUI like in the form and modal components, to demonstrate knowledge 
  return (
    <div className='footer_container'>
      <ul className='footer_social_icons'>
        <li><TwitterIcon /></li>
        <li><FacebookIcon /></li>
        <li><InstagramIcon /></li>
        <li><PinterestIcon /></li>
      </ul>
      <section className='footer_info'>
        <ul className='footer_info_btns'>
          <li>Contact Us</li>
          <li>About</li>
          <li>Privacy</li>
          <li>Careers</li>
        </ul>
        <h5 className='footer_title'>© 2023 Copyright | Scottiestore </h5>
      </section>
    </div>
  );
}

export default Footer;