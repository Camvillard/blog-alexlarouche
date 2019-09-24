// external libs
import React from "react";
import { graphql } from "gatsby";

// internal stuff
import Layout from "../components/layout";
import SEO from "../components/seo";
// import FavorisCard from "../components/regular-post-card"

// helpers


// styles & assets
import '../styles/main.scss';

const FavorisCard = ({favori}) => {
  return(
    <div className="favoris-archives-card">
      <a href={favori.acf.url_du_produit} target="_blank" without rel="noopener noreferrer">
        <img className="featured-favoris" src={favori.featured_media.source_url} alt=""/>
        <div className="favoris-header">
          <div className="favoris-name"><span dangerouslySetInnerHTML={{__html: favori.title}} />/</div>
          <div className="favoris-brand" dangerouslySetInnerHTML={{__html: favori.acf.nom_marque}}/>
        </div>
      </a>
    </div>
  )
}

class FavorisPage extends React.Component {

  componentDidMount() {
    const allImages = document.querySelectorAll('img')
    allImages.forEach( img => {
      img.addEventListener('contextmenu', e => {
        e.preventDefault()
        alert('le clic droit est désactivé pour les photos')
      })
    })
  }

  render() {
    const metadata = this.props.data.site.siteMetadata.seo
    const favoris = this.props.data.allWordpressWpFavoris.edges
    return(
      <React.Fragment>
        <SEO title="archives" keywords={metadata}/>
        <Layout>

          <div className="page favoris-page">

            <h1 className="page-title">tous les favoris</h1>

            <div className="container archives-container">

              {favoris && (
                favoris.map( fav => {
                  return <FavorisCard favori={fav.node} key={fav.node.id} />
                })
              )}


            </div>

          </div>

        </Layout>
      </React.Fragment>
    )
  }
}

export default FavorisPage

export const query = graphql`
query favorisPage {
  allWordpressWpFavoris {
      edges {
        node {
          id
          slug
          title
          featured_media {
            source_url
          }
          acf {
            seo_tags
            nom_marque
            url_du_produit
            description
          }

        }
      }
    }
    site {
      siteMetadata {
        seo
      }
    }
}
`


