import React from 'react'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import './Header.css'


const Header = () => {
  // Here and in the footer I'm intentionally using html elements, instead of MUI like in the form and modal components, to demonstrate knowledge 
  return (
    <div className="header_container">
      <section className='header_title'>
        <PetsOutlinedIcon sx={{ color: '#fff', fontSize: '40px' }} />
        <h1 className='header_company_name'>ScottieStore</h1>
      </section>
      {/* These "buttons" are just for aesthetic purposes */}
      <ul className='header_nav_btns'>
        <li>Shop</li>
        <li>Supplies</li>
        <li>Subscribe</li>
      </ul>
    </div>
  );
}

export default Header;
