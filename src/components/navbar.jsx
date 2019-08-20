// external libs
import React from "react";
import { Link, StaticQuery, graphql } from 'gatsby';

// internal stuff
import SocialIcons from "./social-icons"
// import SearchBar from "./search-bar"

// import Search from "./search"



// styles & assets

// const searchIndices = [
//   { name: `Pages`, title: `Pages`, hitComp: `PageHit` },
//   { name: `Posts`, title: `Articles`, hitComp: `PostHit` },
//   { name: `Favoris`, title: `Favoris`, hitComp: `FavHit` },
// ]

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      dropdownIsActive: false,
      fixedHeader: false
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
      <div id="desktop-header">

        <div className="top-bar">

          <div id="navbar-search">
        {/* <Search collapse indices={searchIndices} /> */}

          </div>
          <SocialIcons id="top-social" />
        </div>

        <Link to="/"><h1 className="logo-title">alexandra larouche</h1></Link>

        <div className="main-menu">
          <div className="nav-links">
            {/* by default, dropdown is hidden - when you hover the name categories, it appears */}

            <span className="menu-link dropdown-toggle" onMouseOver={this.showDropdownMenu} >
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
            </span>

            <Link to="/shop-look" className="menu-link" activeClassName="active-link">shop mon look</Link>
            <Link to="/contact" className="menu-link" activeClassName="active-link">contact</Link>
            <Link to="/a-propos" className="menu-link" activeClassName="active-link">à propos</Link>
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

