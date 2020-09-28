// external libs
import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// internal stuff
import Header from "./header"
import Footer from "./footer"

// styles & assets

const Layout = ({ children, props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="layout-container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="container">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
