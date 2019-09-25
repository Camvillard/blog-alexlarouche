// external libs
import React from "react";
import { graphql } from "gatsby";

// internal stuff
import Layout from "../components/layout";
import SEO from "../components/seo";
import RegularPostCard from "../components/regular-post-card"

// helpers


// styles & assets
import '../styles/main.scss';

class AuthorNathalie extends React.Component {

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
    const posts = this.props.data.allWordpressPost.edges
    return(
      <React.Fragment>
        <SEO title="archives pour l'auteur : Nathalie" keywords={metadata}/>
        <Layout>

          <div className="page archives-page">

            <h1 className="page-title">auteur : Nathalie</h1>

            <div className="container archives-container">

              {posts && (
                posts.map( post => {
                  return <RegularPostCard post={post.node} key={post.node.id} />
                })
              )}


            </div>

          </div>

        </Layout>
      </React.Fragment>
    )
  }
}

export default AuthorNathalie

export const query = graphql`
query nathaliePage {
  allWordpressPost(
  filter: {author:  {eq: 4}},
  sort: {fields: [date], order: [DESC] }
  ) {
    edges {
      node {
        id
        content
        title
        slug
        date

        categories {
          name
          slug
        }

        acf {
          seo_tags
        }

        featured_media {
          id
          source_url
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


