// external libs
import React from "react"
import { Link, graphql } from "gatsby"

// internal stuff
import SEO from "../components/seo"
import SimpleFooter from "../components/simple-footer";

// styles & assets
import '../styles/main.scss';


class MerciPage extends React.Component {

  render(){
    const meta =  this.props.data.site.siteMetadata.seo
    return(
      <React.Fragment>
        <SEO title="Merci" keywords={meta} />
        <div className="page page-merci fullheight-container">

          <div className="container">

          <h1>merci pour ton message !</h1>


          </div>


          <SimpleFooter />

        </div>

      </React.Fragment>
    )
  }
}

export default MerciPage;

export const query = graphql`
query merciPage {
  site {
    siteMetadata {
      seo
    }
  }
}
`
