import React from 'react'
import './Header.css'


const Header = () => {
  return (
    <div className="header_container">
      <div className='header_content'>
        <section className='header_title'>
          <div className='header_logo'></div>
          <h1 className='header_company_name'>ScottieStore</h1>
        </section>
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
