// external libs
import React from "react";
import { graphql } from "gatsby";

// internal stuff
import Header from "../components/header";
import SEO from "../components/seo";
import SocialIcons from "../components/social-icons"
import LastPostCard from "../components/last-post-card"

// helpers

// styles & assets
import '../styles/main.scss';

class IndexPage extends React.Component {

  render() {
    const metadata = this.props.data.site.siteMetadata
    const posts = this.props.data.allWordpressPost.edges
    const lastPost = posts[0].node
    console.log(lastPost)
    const favoris = this.props.data.allWordpressWpFavoris.edges
    return(
      <div id="homepage-content">
        <SEO title="Home" keywords={metadata.seo} />
        <Header siteTitle={metadata.title} path="homepage" />

        <div className="main-container">

          <LastPostCard post={lastPost} />

        </div>

        <div id="last-blogpost" className="main-container">





        </div>

        {/* <SocialIcons id="social-icons-landing"/> */}

      </div>
    )
  }
}

export default IndexPage

export const query = graphql`
query homePage {

  site {
    siteMetadata {
      title
      seo
    }
  }

  allWordpressPost {
    edges {
      node {
        id
        content
        title
        sticky
        slug
        date

        categories {
          name
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

  allWordpressWpFavoris {
   edges {
     node {
       id
       slug
       content
     }
   }
  }
}
`


