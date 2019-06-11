// external libs
import React from "react";
import { graphql } from "gatsby";

// internal stuff
import Header from "../components/header";
import SEO from "../components/seo";
import SocialIcons from "../components/social-icons"
import LastPostCard from "../components/last-post-card"
import RegularPostCard from "../components/regular-post-card"

// helpers

// styles & assets
import '../styles/main.scss';

class IndexPage extends React.Component {

  render() {
    const metadata = this.props.data.site.siteMetadata
    const posts = this.props.data.allWordpressPost.edges
    const lastPost = posts[0].node
    const firstSectionPosts = posts.slice(1,3)
    const secondSectionPosts = posts.slice(3,5)
    console.log(secondSectionPosts)
    const favoris = this.props.data.allWordpressWpFavoris.edges
    return(
      <div id="homepage-content">
        <SEO title="Home" keywords={metadata.seo} />
        <Header siteTitle={metadata.title} path="homepage" />

        <div id="last-blogpost" className="main-container">
          <LastPostCard post={lastPost} />
        </div>

        <div className="container">

        {firstSectionPosts.map( p => {
          return <RegularPostCard post={p.node} key={p.node.id} />
        })}



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

  allWordpressPost(
  limit: 5,
  sort: {fields: [date], order: [DESC] }
  ) {
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

  allWordpressWpFavoris(limit: 2) {
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


