// external libs
import React from "react"
import { Link, graphql } from "gatsby"

// internal stuff
import SEO from "../components/seo"
import Layout from "../components/layout";
import SimpleFooter from "../components/simple-footer";
import MailchimpForm from "../components/mailchimp-form"

// styles & assets
import '../styles/main.scss';


class Infolettre extends React.Component {


  render(){
    const meta =  this.props.data.site.siteMetadata.seo
    return(
      <React.Fragment>
        <SEO title="infolettre" keywords={meta} />
        <div className="page page-infolettre fullheight-container">

          <div className="infolettre-container">
            <h3>s'inscrire à l'infolettre</h3>
            <MailchimpForm id="homepage-mailchimp-form" />

          </div>
          <SimpleFooter />

        </div>

      </React.Fragment>
    )
  }
}

export default Infolettre;

export const query = graphql`
query infolettre {
  site {
    siteMetadata {
      seo
    }
  }
}
`
