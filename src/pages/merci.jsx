// external libs
import React from "react"
import { graphql } from "gatsby"

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

          <div className="white-container">
            <img className="icon-a" src="https://res.cloudinary.com/camvillard/image/upload/v1569254303/alex%20larouche/a-stroke.svg" alt="initiales"/>
            <h2>merci pour ton message !</h2>
            <p>tu recevras une réponse rapidement.</p>
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
