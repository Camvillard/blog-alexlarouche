// external libs
import React from "react"
import { Link, graphql } from "gatsby"

// internal stuff
import SEO from "../components/seo"
import SimpleFooter from "../components/simple-footer";

// styles & assets
import '../styles/main.scss';


class AboutPage extends React.Component {

  componentDidMount() {
    const allImages = document.querySelectorAll('img')
    allImages.forEach( img => {
      img.addEventListener('contextmenu', e => {
        e.preventDefault()
        alert('le clic droit est désactivé pour les photos')
      })
    })
  }

  render(){
    const meta =  this.props.data.site.siteMetadata.seo
    const data = this.props.data.wordpressPage
    const image = data.featured_media ? data.featured_media.source_url : "https://content.alexandralarouche.ca/wp-content/uploads/2019/06/alex_larouche.jpg"
    return(
      <React.Fragment>
        <SEO title="About" keywords={meta} />
        <div className="page page-about fullheight-container">

        <div className="columns">
          <div className="column one-half">
            <h1 className="main-page-title">{data.title}</h1>
            <img src={image} alt="profile alexandra larouche"/>
          </div>

          <div className="column one-half">
            <div className="white-container">
              <div dangerouslySetInnerHTML= {{__html: data.content}} />
              <Link to="/contact" className="btn-square">me contacter</Link>
            </div>
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
    featured_media {
      id
      source_url
    }
  }
  site {
    siteMetadata {
      seo
    }
  }
}
`
