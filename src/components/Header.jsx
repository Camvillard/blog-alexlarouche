// external libs
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

// internal stuff

// styles & assets

const Header = ({siteTitle, path}) => {
  return (
    <header id="site-header" >
      <div>
        {path === "homepage" ? <h1>{siteTitle}</h1> : <h1><Link to="/">{siteTitle}</Link></h1> }
      </div>
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
