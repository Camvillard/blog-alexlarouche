// external libs
import React from "react"
import { Link } from "gatsby"

// internal stuff
import SEO from "../components/seo"
import SimpleFooter from "../components/simple-footer";

// styles & assets
// import pattern from "../images/favicon.png"


class AboutPage extends React.Component {
  render(){
    const meta =  this.props.data.site.siteMetadata.seo
    const data = this.props.data.wordpressPage
    return(
      <React.Fragment>
        <SEO title="About" keywords={meta} />
        <div className="page page-about fullheight-container">
            <h1 className="page-title">{data.title}</h1>

          <div className="container">
            <img src="https://content.alexandralarouche.ca/wp-content/uploads/2019/06/alex_larouche.jpg" alt="photo d'à propos alexandra larouche"/>
            <div className="white-container">
              <div dangerouslySetInnerHTML= {{__html: data.content}} />

            </div>
          </div>


          <SimpleFooter />

        </div>

      </React.Fragment>
    )
  }
}

export default AboutPage;

export const query = graphql`
query aboutPage {
  wordpressPage(title:{eq: "à propos"}) {
    id
    title
    content
  }
  site {
    siteMetadata {
      seo
    }
  }
}

`
