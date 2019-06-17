// external libs
import React from "react";
import { graphql, Link } from "gatsby";

// internal stuff
import Header from "../components/header";
import SEO from "../components/seo";
import SocialIcons from "../components/social-icons"
import LastPostCard from "../components/last-post-card"
import RegularPostCard from "../components/regular-post-card"
import FeaturedPost from "../components/featured-post"
import MailchimpForm from "../components/mailchimp-form";
import FavorisSmallCard from "../components/favoris-card";

// helpers


// styles & assets
import '../styles/main.scss';

class IndexPage extends React.Component {

  render() {
    const metadata = this.props.data.site.siteMetadata
    const posts = this.props.data.allWordpressPost.edges
    const lastPost = posts[0].node
    const featuredPost = this.props.data.wordpressPost
    const firstSectionPosts = posts.slice(1,3)
    const secondSectionPosts = posts.slice(3,5)
    const favorisUn = this.props.data.allWordpressWpFavoris.edges[0].node
    const favorisDeux = this.props.data.allWordpressWpFavoris.edges[1].node
    return(
      <div id="homepage-content">
        {/* Meta stuff */}
        <SEO title="Home" keywords={metadata.seo} />
        <Header siteTitle={metadata.title} path="homepage" />

        <div id="last-blogpost" className="main-container">
          <LastPostCard post={lastPost} />
        </div>

        <div className="container">

          <div id="first-posts-section">
            {firstSectionPosts.map( p => {
              return <RegularPostCard post={p.node} key={p.node.id} />
            })}
          </div>

        </div>
        {/* end of container */}

        <div id="featured-post-section">
          <FeaturedPost post={featuredPost} />
        </div>

        <div className="container">

          <div id="second-posts-section">
            {secondSectionPosts.map( p => {
              return <RegularPostCard post={p.node} key={p.node.id} />
            })}
          </div>

          <div className="read-more">
            <Link to="/">lire plus d'articles</Link>
          </div>

          <div id="about-section">

            <div className="left-section">
              <img src="https://content.alexandralarouche.ca/wp-content/uploads/2019/06/alex_larouche.jpg" alt="alexandra larouche"/>
              <SocialIcons id="homepage-about-icons"/>
            </div>

            <div className="right-section">
              <h3>à propos</h3>
              <p>Half-giant jinxes peg-leg gillywater broken glasses large black dog Great Hall. Nearly-Headless Nick now string them together, and answer me this, which creature would you be unwilling to kiss? Poltergeist sticking charm, troll umbrella stand flying cars golden locket Lily Potter. Pumpkin juice Trevor wave your wand out glass orbs, a Grim knitted hats. Stan Shunpike doe patronus, suck his soul Muggle-Born large order of drills the trace. Bred in captivity fell through the veil, quaffle blue flame ickle diddykins Aragog. Yer a wizard, Harry Doxycide the woes of Mrs. Weasley Goblet of Fire.</p>
              <div className="btn-blob">
                <Link to="/apropos">en savoir plus</Link>
              </div>
            </div>

          </div>
          {/* end of about section */}

        </div>
        {/* end of container */}

        <div id="newsletter-section">

          <div id="newsletter-container">
            <h3>reçois un courriel à chaque nouvel article</h3>
            <MailchimpForm id="homepage-mailchimp-form" />
          </div>
        </div>
        {/* end of #newsletter-section */}

        <div id="favoris-section">
          <h3>mes favoris du moment</h3>

          <div className="favoris-sm-card" id="homepage-premier-favori">
            <img src={favorisUn.featured_media.source_url} />
            <div className="favoris-sm-card-content">
              <p className="favoris-sm-card-title"><span>{favorisUn.title}</span></p>
              <p>{favorisUn.acf.nom_marque}</p>
              <a href={`/${favorisUn.acf.url_du_produit}`}>à retrouver ici</a>
            </div>
          </div>
          {/* end of #premier favori */}

          <div className="favoris-sm-card" id="homepage-deuxieme-favori">
            <img src={favorisDeux.featured_media.source_url} />
            <div className="favoris-sm-card-content">
              <p className="favoris-sm-card-title"><span>{favorisDeux.title}</span></p>
              <p>{favorisDeux.acf.nom_marque}</p>
              <a href={`/${favorisDeux.acf.url_du_produit}`}>à retrouver ici</a>
            </div>
          </div>
         {/* end of #deuxieme favori */}

         <div className="btn-square">
          <a href="#">voir tous les favoris</a>
         </div>



        </div>
        {/* end of #favoris-section */}

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

  wordpressPost(
    acf: {mise_en_avant: {eq: "true"}}){
    content
    title
    categories {
      name
    }
    date
    featured_media {
      source_url
    }
    acf {
      mise_en_avant
      image_supplementaire {
        source_url
      }
    }
    slug
  }

  allWordpressWpFavoris(limit: 2) {
    edges {
      node {
        id
        slug
        title
        featured_media {
          source_url
        }
        acf {
          nom_marque
          url_du_produit
          description
        }
      }
    }
  }
}
`


