// external libs
import React from "react";
import { Link, StaticQuery } from 'gatsby';

// internal stuff

// styles & assets
import BurgerMenu from "../images/burger-menu.svg"
import CloseMenu from "../images/close-menu.svg"
import SocialIcons from "./social-icons"





class MobileNavbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      navbarIsOpen: false,
      categoriesAreOpen: false
    }
  }

  toggleMenu = () => {
    this.setState({
      navbarIsOpen: !this.state.navbarIsOpen
    })
  };

  toggleCategories = () => {
    this.setState({
      categoriesAreOpen: !this.state.categoriesAreOpen
    })
  }

  render(){
    console.log(this.props)
    const categories = this.props.data.allWordpressCategory.edges
    return(
      <div id="mobile-header" >

        <div onClick={this.toggleMenu} id="toggle-menu">
          {this.state.navbarIsOpen === false ?
            <BurgerMenu width="20" /> : <CloseMenu width="20" />}
        </div>

        <SocialIcons id="social-icons-navbar" />

        <div className={`mobile-main-menu ${this.state.navbarIsOpen === true ? 'show-menu' : 'hide-menu'}`}>
          <div className="mobile-menu-links">
            <Link to="/" onClick={this.toggleCategories}>catégories</Link>
            <ul className={`sub-menu-links ${this.state.categoriesAreOpen ? 'show-sub-menu' :  'hide-sub-menu'} `}>
              {categories.map( d => <li key={d.node.name}><Link to={`/categories/${d.node.slug}`}>{d.node.name}</Link></li>)}
            </ul>
            <Link to="/shop-look">shop mon look</Link>
            <Link to="/contact">contact</Link>
            <Link to="/a-propos">à propos</Link>
          </div>
          <SocialIcons id="social-icons-mobile" />
        </div>

        <Link to="/"><h1 className="logo-title">alexandra larouche</h1></Link>
      </div>
    )
  }
}



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
        <MobileNavbar data={data}  />
      )}
    }
  />)
}


