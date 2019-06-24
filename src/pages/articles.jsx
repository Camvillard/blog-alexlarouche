// external libs
import React from "react";
// import { graphql, Link } from "gatsby";

// internal stuff
// import Header from "../components/header";
// import SEO from "../components/seo";
// import SocialIcons from "../components/social-icons"
// import LastPostCard from "../components/last-post-card"
// import RegularPostCard from "../components/regular-post-card"
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
    // const metadata = this.props.data.site.siteMetadata
    // const posts = this.props.data.allWordpressPost.edges
    // const lastPost = posts[0].node
    // const featuredPost = this.props.data.wordpressPost
    // const firstSectionPosts = posts.slice(1,3)
    // const secondSectionPosts = posts.slice(3,5)
    // const favorisUn = this.props.data.allWordpressWpFavoris.edges[0].node
    // const favorisDeux = this.props.data.allWordpressWpFavoris.edges[1].node
    return(
      <div id="archive-articles-content">

        <Instagram />
        <Footer />

      </div>
    )
  }
}

export default ArchivesPage


