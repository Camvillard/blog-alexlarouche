// external libs
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

// internal stuff
import Navbar from "./navbar"
import MobileNavbar from "./mobile-navbar"

// styles & assets

class Header extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      windowSize: ""
    }
  }

  componentDidMount() {
    this.setState({
      windowSize: window.innerWidth
    })
  }

  render(){
  console.log('prout')
  console.log(this.state.windowSize)
  return (
    <header id="site-header" >
      {this.state.windowSize < '992' ? <MobileNavbar /> : <Navbar />}

      {this.props.path === "homepage" ? <h1 className="logo-title">{this.props.siteTitle}</h1> : <h1 className="logo-title"><Link to="/">{this.props.siteTitle}</Link></h1> }
    </header>
    )
  }
}

// const Header = ({siteTitle, path}) => {
//   )
// }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
