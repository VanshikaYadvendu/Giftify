import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState('');
  const{getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="navbar">
      <Link to="/"><img src={assets.logo} className="logo" alt="Logo" /></Link>
      
      <ul className="navbarMenu">
        <li>
          <Link to="/" onClick={() => setMenu("Home")} className={menu === 'Home' ? "active" : ""}>Home</Link>
        </li>
        <li>
          <a href="#explore-menu" onClick={() => setMenu("Menu")} className={menu === 'Menu' ? "active" : ""}>Menu</a>
        </li>
        <li>
          <a href="#app-download" onClick={() => setMenu("Mobile App")} className={menu === 'Mobile App' ? "active" : ""}>Mobile App</a>
        </li>
        <li>
          <a href="#footer" onClick={() => setMenu("Contact")} className={menu === 'Contact' ? "active" : ""}>Contact Us</a>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
