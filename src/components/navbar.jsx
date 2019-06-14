// external libs
import React from "react";
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

// internal stuff

// styles & assets
import BurgerMenu from "../images/burger-menu.svg"
import CloseMenu from "../images/close-menu.svg"



class Navbar extends React.Component {

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
      <div id="main-navbar" >
        <div className="main-menu">
          <div className="menu-links">
            <Link to="#">catégories</Link>
            <Link to="#">shop mon look</Link>
            <Link to="#">contact</Link>
            <Link to="#">à propos</Link>
          </div>
        </div>
      </div>
    )
  }
}


export default Navbar
