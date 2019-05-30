// external libs
import React from "react";
import { Link, graphql } from "gatsby";

// internal stuff
import Header from "../components/header";
import SEO from "../components/seo";
import Footer from '../components/footer'

// styles & assets
import '../styles/main.scss';


const IndexPage = ({data}) => {
  return (
    <div>
      <SEO id="homepage" title="Home" keywords={data.seo} />
      <Header siteTitle={data.site.siteMetadata.title} path="homepage" />
      <Link to="/contact">contact</Link>
      <h1>todo prout</h1>
      <Footer />
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
