// external libs
import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

// internal stuff
import Navbar from "./navbar"
import MobileNavbar from "./mobile-navbar"
import Search from "./search"

const searchIndices = [
  { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
  { name: `Posts`, title: `Blog Posts`, hitComp: `PostHit` },
]


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
    <Search collapse indices={searchIndices} />
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
