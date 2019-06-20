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
  return (
    <header id="site-header" >
      {this.state.windowSize < '992' ? <MobileNavbar /> : <Navbar path={this.props.path} />}

      {this.props.path === "homepage" ? <h1 className="logo-title">{this.props.siteTitle}</h1> : <Link to="/"><h1 className="logo-title">{this.props.siteTitle}</h1></Link> }
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
