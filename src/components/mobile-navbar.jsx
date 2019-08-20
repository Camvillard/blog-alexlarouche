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
      <div id="mobile-header" >

        <div onClick={this.toggleMenu} id="toggle-menu">
          {this.state.navbarIsOpen === false ?
            <BurgerMenu width="20" /> : <CloseMenu width="20" />}
        </div>

        <SocialIcons id="social-icons-navbar" />

        <div className={`mobile-main-menu ${this.state.navbarIsOpen === true ? 'show-menu' : 'hide-menu'}`}>
          <div className="mobile-menu-links">
            <Link to="/">catégories</Link>
            <Link to="/shop-look">shop mon look</Link>
            <Link to="/contact">contact</Link>
            <Link to="/a-propos">à propos</Link>
          </div>
          <SocialIcons id="social-icons-mobile" />
        </div>

        <Link to="/"><h1 className="logo-title">alexandra larouche</h1></Link>
      </div>
    )
  }
}


export default MobileNavbar
