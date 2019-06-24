// external libs
import React from "react";
import { Link } from 'gatsby';

// internal stuff

// styles & assets
import BurgerMenu from "../images/burger-menu.svg"
import CloseMenu from "../images/close-menu.svg"
import SocialIcons from "./social-icons"



class MobileNavbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      navbarIsOpen: false
    }
  }

  toggleMenu = (e) => {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    })
  }

  render(){
    return(
      <div id="mobile-navbar" >
        <div onClick={this.toggleMenu} className="toggle-menu">
          {this.state.navbarIsOpen === false ?
            <BurgerMenu width="20" /> : <CloseMenu width="20" />}
        </div>
        <SocialIcons id="social-icons-navbar" />
        <div className={`mobile-main-menu ${this.state.navbarIsOpen === true ? 'show-menu' : 'hide-menu'}`}>
          <div className="mobile-menu-links">
            <Link to="/">catégories</Link>
            <Link to="/">shop mon look</Link>
            <Link to="/">contact</Link>
            <Link to="/">à propos</Link>
          </div>
          <SocialIcons id="social-icons-mobile" />
        </div>
      </div>
    )
  }
}


export default MobileNavbar
