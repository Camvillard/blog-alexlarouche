// external libs
import React from "react"
import { graphql } from "gatsby"

// internal stuff
import SEO from "../components/seo"
import Layout from "../components/layout";

// styles & assets
import '../styles/main.scss';


class MentionsLegales extends React.Component {

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
        <SEO title="mentions légales" keywords={meta} />
        <div className="page page-legale container">

          <h1>Mentions légales</h1>

          <div dangerouslySetInnerHTML= {{__html: data.content}} />

        </div>

      </Layout>
    )
  }
}

export default MentionsLegales;

export const query = graphql`
query mentionsLegales {
  wordpressPage(title:{eq: "mentions légales"}) {
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
