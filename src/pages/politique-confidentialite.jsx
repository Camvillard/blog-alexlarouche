// external libs
import React from "react"
import { Link, graphql } from "gatsby"

// internal stuff
import SEO from "../components/seo"
import SimpleFooter from "../components/simple-footer";

// styles & assets
import '../styles/main.scss';


class PolitiqueCondidentialite extends React.Component {

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
    return(
      <React.Fragment>
        <SEO title="Politique de confidentialité" keywords={meta} />
        <div className="page page-confidentialite fullheight-container">

          <div dangerouslySetInnerHTML= {{__html: data.content}} />

          <SimpleFooter />

        </div>

      </React.Fragment>
    )
  }
}

export default PolitiqueCondidentialite;

export const query = graphql`
query PolitiqueCondidentialite {
  wordpressPage(title:{eq: "Politique de confidentialité"}) {
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
