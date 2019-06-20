// external libs
import React from "react";
import { Link } from 'gatsby';

// internal stuff
import SocialIcons from "./social-icons"

// styles & assets



class Navbar extends React.Component {

  render(){
    return(
      <div id="main-navbar" >
        <SocialIcons id='navbar-social'/>
        <div className="main-menu">
          <div className="menu-links">
            <Link to="/">catégories</Link>
            <Link to="/">shop mon look</Link>
            <Link to="/">contact</Link>
            <Link to="/">à propos</Link>
          </div>
        </div>
      </div>
    )
  }
}


export default Navbar
