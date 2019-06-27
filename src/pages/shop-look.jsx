// external libs
import React from "react";
import { graphql, Link } from "gatsby";

// internal stuff
import Layout from "../components/layout";
import SEO from "../components/seo";
import meta from "../data/meta";


// styles & assets

class ShopLook extends React.Component {

  render(){
    return(
      <Layout>

        <SEO title="Shop mon look" keywords={meta.seo.keywords} />
        <h1>shop mon look</h1>

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
}
`

