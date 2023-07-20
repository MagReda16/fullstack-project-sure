import React from 'react'
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import './Header.css'


const Header = () => {
  return (
    <div className="header_container">
      <div className='header_content'>
        <section className='header_title'>
          <PetsOutlinedIcon sx={{ color: 'white', fontSize: '50px' }} />
          <h1 className='header_company_name'>ScottieStore</h1>
        </section>
        {/* These "buttons" are just for aesthetic purposes */}
        <ul className='header_nav_btns'>
          <li>Shop</li>
          <li>Supplies</li>
          <li>Subscribe</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
