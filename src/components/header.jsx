// external libs
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

// internal stuff
import Navbar from "./navbar"
import MobileNavbar from "./mobile-navbar"

// styles & assets

const Header = ({siteTitle, path}) => {
  return (
    <header id="site-header" >
      <MobileNavbar />
      {path === "homepage" ? <h1 className="logo-title">{siteTitle}</h1> : <h1 className="logo-title"><Link to="/">{siteTitle}</Link></h1> }
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default Header
