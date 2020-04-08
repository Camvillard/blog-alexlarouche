// external libs
import React from "react"
import { graphql } from "gatsby"

// internal stuff
import Layout from "../components/layout"
import SEO from "../components/seo"
import meta from "../data/meta"

// styles & assets

const FavorisCard = ({ favori }) => {
  return (
    <div className="favoris-card">
      <a
        href={`${favori.acf.url_du_produit}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={favori.featured_media ? favori.featured_media.source_url : ""}
          alt={favori.title}
        />

        <div className="favoris-card-content">
          <h3 className="post-card-title">
            <span dangerouslySetInnerHTML={{ __html: favori.title }} />
          </h3>
          <p>{favori.acf.nom_marque}</p>
        </div>
      </a>
    </div>
  )
}

class ShopLook extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // by default when arriving on the page
      // we want to see all favorites
      activeTab: "all",
    }
  }

  handleClick = e => {
    // we use data attributes to target the catehpry we want to show
    // const allFavoris = this.props.data.allWordpressWpFavoris.edges
    const categoryToShow = e.target.dataset.category
    // if see all is targeted, we need to set manually the state
    if (categoryToShow === "tout") {
      this.setState({ activeTab: "all" })
    } else {
      // else, grab the category of the list-item clicked
      this.setState({ activeTab: categoryToShow })
    }
  }

  filterByCategories = (cards, category) => {
    // again, we need to handle the « see all » possibily
    // we return all the cards if activeTab wanted is all
    if (category === "all") {
      return cards
    } else {
      // we filter them if not, using the category name
      // matching the data attributes
      return cards.filter(
        card =>
          card.node.categories && card.node.categories[0].name === category
      )
    }
  }

  componentDidMount() {
    const allImages = document.querySelectorAll("img")
    allImages.forEach(img => {
      img.addEventListener("contextmenu", e => {
        e.preventDefault()
        alert("le clic droit est désactivé pour les photos")
      })
    })
  }

  render() {
    // const allFavoris = this.assignDefaultCategory(this.props.data.allWordpressWpFavoris.edges)
    const allFavoris = this.props.data.allWordpressWpFavoris.edges
    const allCategory = this.props.data.allWordpressCategory.edges
    return (
      <Layout>
        <SEO title="tous mes favoris" keywords={meta.seo.keywords} />
        <h1 className="page-title">tous mes favoris</h1>

        <div className="favoris-filter-tabs">
          <ul className="list-inline">
            <li key="0" data-category="tout" onClick={this.handleClick}>
              voir tout
            </li>
            {allCategory.map(cat => {
              return (
                <li
                  key={cat.node.id}
                  data-category={cat.node.name}
                  onClick={this.handleClick}
                >
                  {cat.node.name}
                </li>
              )
            })}
          </ul>
        </div>

        <div className="favoris-container">
          {this.filterByCategories(allFavoris, this.state.activeTab).map(
            fav => (
              <FavorisCard favori={fav.node} key={fav.node.id} />
            )
          )}
        </div>
      </Layout>
    )
  }
}

export default ShopLook

export const query = graphql`
  query favorisPage {
    allWordpressWpFavoris {
      edges {
        node {
          id
          slug
          featured_media {
            source_url
          }
          acf {
            seo_tags
            nom_marque
            url_du_produit
            description
          }
          title
          categories {
            slug
            name
          }
        }
      }
    }

    allWordpressCategory {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`
