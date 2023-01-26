import React from 'react'
import navbar1 from "../assets/navbar/navbar1.jpeg"
import { NavLink } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/main.css'

    
const Header = () => {

    const className=(path) => {
      if (window.location.pathname === path) return "active nav-link"
      return "nav-link"
    }
  
    return (
      
  
   <Nav variant="pills" className="navigation">
            <img
                src={navbar1}
                width="130"
                height="50"
                className="logo"
                alt="Logo"
              />
          <Link to={'/'} className={className('/')}>Whats On</Link>
          <Link to={'/program'} className={className('/program')}>Program</Link>
          <Link to={'/kampanye'} className={className('/kampanye')}>Kampanye</Link>
          <Link to={'/artikel'} className={className('/artikel')}>Artikel</Link>
          <Link to={'/login'} className={className('/login')}>Sign In</Link>
        </Nav>
    )
  }
  
  export default Header
