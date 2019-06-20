// external libs
import React from "react";
import { Link, StaticQuery, graphql } from 'gatsby';

// internal stuff
import SocialIcons from "./social-icons"

// styles & assets



class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dropdownIsActive: false
    }
  };

  showDropdownMenu = () => {
    this.setState({
      dropdownIsActive: true
    })
  };

  hideDropdownMenu = () => {
    this.setState({
      dropdownIsActive: false
    })
  };

  render(){
    // grab all the categories returned by the query
    // and build the dropdown menu with it
    const categories = this.props.data.allWordpressCategory.edges
    return(
      <div id="main-navbar" >
        <SocialIcons id='navbar-social'/>
        <div className="main-menu">
          <div className="nav-links">
            {/* by default, dropdown is hidden - when you hover the name categories, it appears */}
            <Link to="/" className="menu-link dropdown-toggle" onMouseOver={this.showDropdownMenu} >
              catégories

              {/* onMouseLeave allows the user to keep the menu open as long as he's on the list of items */}
              <div className={`dropdown-menu ${this.state.dropdownIsActive ? 'show-dropdown' : 'hide-dropdown'} `} onMouseLeave={this.hideDropdownMenu}>
                <ul>
                  {categories.map( cat => <li key={cat.node.slug}>
                    <Link className="dropdown-item" to={`/categories/${cat.node.slug}`}>{cat.node.name}</Link>
                    </li>
                  )}
                </ul>
              </div>

            </Link>
            <Link to="/shop-look" className="menu-link" activeClassName="active-link">shop mon look</Link>
            <Link to="/contact" className="menu-link" activeClassName="active-link">contact</Link>
            <Link to="/apropos" className="menu-link" activeClassName="active-link">à propos</Link>
          </div>

        </div>
      </div>
    )
  }
}


// export default Navbar


export default (props) => {
  return (<StaticQuery
    query={graphql`
      query {
          allWordpressCategory {
            edges {
              node {
                name
                slug
              }
            }
          }
        }
    `
    }

    render={(data) => {
      return (
        <Navbar data={data}  />
      )}
    }
  />)
}

