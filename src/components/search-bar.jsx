// external libs
// import { Link } from "gatsby";
// import PropTypes from "prop-types";
import React from "react";

// internal stuff

// styles & assets
import { FaSearch } from "react-icons/fa";


class SearchBar extends React.Component {

  render(){
  return (
    <div id={this.props.id}>
      <FaSearch />
    </div>
    )
  }
}


export default SearchBar
