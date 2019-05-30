// external libs
import React from "react";
import { Link, graphql } from "gatsby";

// internal stuff
import Header from "../components/header";
import SEO from "../components/seo";
import SocialIcons from "../components/social-icons"

// styles & assets
import '../styles/main.scss';


const IndexPage = ({data}) => {
  return (
    <div id="coming-soon-page">
    <SEO title="Home" keywords={data.seo} />

      <div className="coming-soon-content">
        <Header siteTitle={data.site.siteMetadata.title} path="homepage" />
        <h4>le blog arrive bientôt !</h4>
      </div>

      <SocialIcons id="social-icons-landing"/>
    </div>
  )
}


export const query = graphql`
query homePage {
  site {
    siteMetadata {
      title
      seo
    }
  }
}
`


export default IndexPage
