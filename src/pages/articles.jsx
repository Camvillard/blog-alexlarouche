// external libs
import React from "react";
// import { graphql, Link } from "gatsby";

// internal stuff
import Layout from "../components/layout";
import SEO from "../components/seo";
// import SocialIcons from "../components/social-icons"
// import LastPostCard from "../components/last-post-card"
import RegularPostCard from "../components/regular-post-card"
// import FeaturedPost from "../components/featured-post"
// import MailchimpForm from "../components/mailchimp-form";
// import FavorisSmallCard from "../components/favoris-card";
import Instagram from "../components/instagram";
import Footer from "../components/footer";

// helpers


// styles & assets
import '../styles/main.scss';

class ArchivesPage extends React.Component {

  render() {
    const metadata = this.props.data.site.siteMetadata.seo
    const posts = this.props.data.allWordpressPost.edges
    return(
      <React.Fragment>
        <SEO title="archives" keywords={metadata}/>
        <Layout>

          <div className="page archives-page">

            <h1 className="page-title">archives</h1>

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

export default ArchivesPage

export const query = graphql`
query archivesPage {
  allWordpressPost(
  limit: 12,
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


