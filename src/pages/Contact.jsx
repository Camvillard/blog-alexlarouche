// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import Layout from "../components/layout";
import SEO from "../components/seo";
import meta from "../data/meta";


// styles & assets

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={meta.seo.keywords} />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
