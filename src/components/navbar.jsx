// external libs
import React from "react";
import { Link } from 'gatsby';

// internal stuff

// styles & assets



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
