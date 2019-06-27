// external libs
import React from "react";
import { graphql} from "gatsby";

// internal stuff
import Layout from "../components/layout";
import SEO from "../components/seo";
import meta from "../data/meta";


// styles & assets


const FavorisCard = ({favori}) => {
  return(
    <div className="favoris-card">

      <img src={favori.featured_media.source_url} alt={favori.title}/>

      <div className="favoris-card-content">
        <h3 className="favoris-card-title">
          <a href={`${favori.acf.url_du_produit}`} target="_blank" rel="noopener noreferrer">{favori.title}</a>
        </h3>
        <p>{favori.acf.nom_marque}</p>
      </div>

    </div>
  )

}

// 1. need to create a function to filter elements depending on the category name


// 2. need to create a li for each one of the categories that exists


class ShopLook extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      activeTab: 'all'
    }
  }

  handleClick = (e) => {
    // we use data attributes to target the catehpry we want to show
    const allFavoris = this.props.data.allWordpressWpFavoris.edges
    const categoryToShow =  e.target.dataset.category
    if (categoryToShow === "tout") {
      this.setState({ activeTab: 'all'})
    } else {
      this.setState({ activeTab: categoryToShow})
    }
  }


  filterByCategories = (cards, category) => {
    if (category === "all") {
      return cards
    } else {
      const filteredCards = cards.filter( card => {
        return card.node.categories[0].name === category
      })
      return filteredCards
    }
  }

  render(){
    const allFavoris = this.props.data.allWordpressWpFavoris.edges
    const allCategory = this.props.data.allWordpressCategory.edges
    return(
      <Layout>

        <SEO title="Shop mon look" keywords={meta.seo.keywords} />
        <h1 className="page-title">shop mon look</h1>

        <div className="favoris-filter-tabs">

        <ul className="list-inline">
          <li key='0' data-category="tout" onClick={this.handleClick}>voir tout</li>
          {allCategory.map( cat => {
            return <li key={cat.node.id} data-category={cat.node.name} onClick={this.handleClick}>
                        {cat.node.name}</li>
          })}
        </ul>

erdfg

        </div>


        <div className="favoris-container">

        {this.filterByCategories(allFavoris, this.state.activeTab).map( fav => <FavorisCard favori={fav.node} key={fav.node.id} /> )}



        </div>



      </Layout>
    )
  }
}


export default ShopLook

export const query = graphql`
query shopPage {
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

