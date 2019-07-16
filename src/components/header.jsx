// external libs
import React from "react";
import PropTypes from "prop-types";
// import { Link } from "gatsby";

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
    <header>
      {this.state.windowSize < '992' ? <MobileNavbar /> : <Navbar path={this.props.path} />}
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
