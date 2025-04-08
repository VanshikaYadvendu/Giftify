import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
  const [menu,setMenu] = useState('')
  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} className='logo' /></Link>
        <ul className="navbarMenu">
          <li onClick={()=>setMenu("Home")} className={menu=='Home'?"active":""}>Home</li>
          <li onClick={()=>setMenu("Menu")} className={menu=='Menu'?"active":""}>Menu</li>
          <li onClick={()=>setMenu("Mobile App")} className={menu=='Mobile App'?"active":""}>Mobile App </li>
          <li onClick={()=>setMenu("Contact")} className={menu=='Contact'?"active":""}>Contact Us</li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to ='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className="dot">
            </div>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar