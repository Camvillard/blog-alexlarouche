// external libs
import React from "react"
import { Link, graphql } from "gatsby"

// internal stuff
import SEO from "../components/seo"
import Layout from "../components/layout";

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
      <Layout>
        <SEO title="Politique de confidentialité" keywords={meta} />
        <div className="page page-confidentialite container">

          <h1>Politique de confidentialité</h1>

          <div dangerouslySetInnerHTML= {{__html: data.content}} />


        </div>

      </Layout>
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
