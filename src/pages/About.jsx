// external libs
import React from "react"
import { Link } from "gatsby"

// internal stuff
import Layout from "../components/layout"
import SEO from "../components/seo"
import meta from "../data/meta";

// styles & assets


const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={meta.seo.keywords} />
    <h1>Hi from the about page</h1>
    <p>Welcome to about page</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/contact">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
