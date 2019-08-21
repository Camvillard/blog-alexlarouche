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
// import FavorisSmallCard from "../components/favoris-card";
import Instagram from "../components/instagram";
import Footer from "../components/footer";

// helpers


// styles & assets
import '../styles/main.scss';

class IndexPage extends React.Component {

  handleScroll = () => {
    console.log('scrolling')
  }

  render() {
    const metadata = this.props.data.site.siteMetadata
    const posts = this.props.data.allWordpressPost.edges
    const lastPost = posts[0].node
    const featuredPost = this.props.data.wordpressPost
    const firstSectionPosts = posts.slice(1,3)
    const secondSectionPosts = posts.slice(3,5)
    const aboutContent = this.props.data.wordpressPage.acf.a_propos
    const favorisUn = this.props.data.allWordpressWpFavoris.edges[0].node
    const favorisDeux = this.props.data.allWordpressWpFavoris.edges[1].node
    return(
      <div id="homepage-content" onScroll={this.handleScroll}>
        {/* Meta stuff */}
        <SEO title="Home" keywords={metadata.seo} />
        <Header siteTitle={metadata.title} path="homepage" />

        <div id="last-blogpost" className="fullwidth-container">
          <LastPostCard post={lastPost} />
        </div>

        <div className="container">

          <div id="first-posts-section" className="posts-section">
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

          <div id="second-posts-section" className="posts-section">
            {secondSectionPosts.map( p => {
              return <RegularPostCard post={p.node} key={p.node.id} />
            })}
          </div>

          <div className="read-more">
            <Link to="/articles">lire plus d'articles</Link>
          </div>

          <div id="about-section">

            <div className="left-section">
              <img src="https://content.alexandralarouche.ca/wp-content/uploads/2019/06/alex_larouche.jpg" alt="alexandra larouche"/>
              <SocialIcons id="homepage-about-icons"/>
            </div>

            <div className="right-section">
              <h3>à propos</h3>
              <div dangerouslySetInnerHTML= {{__html: aboutContent}} />
              <div className="btn-block">
                <Link to="/apropos" className="btn-blob">en savoir plus</Link>
              </div>
            </div>

          </div>
          {/* end of about section */}

        </div>
        {/* end of container */}

        <div id="newsletter-section">

          <div id="newsletter-container" className="container">
            <h3>reçois un courriel à chaque nouvel article</h3>
            <MailchimpForm id="homepage-mailchimp-form" />
          </div>
        </div>
        {/* end of #newsletter-section */}

        <div id="video-section" className="container">

          <div className="video-card" id="first-video">

            <div className="video-description">
              <h6 className="rose-dawn">la dernière vidéo</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Ratione deserunt veniam aspernatur, error rem qui, sit vero quisquam hic
              perspiciatis earum repellendus aliquam aliquid beatae?
              Commodi accusamus non ratione minima.</p>
            </div>

            <div className="video-container">
              <img src="https://content.alexandralarouche.ca/wp-content/uploads/2019/06/placeholder-video.png" alt="placeholder video"/>
              <div className="btn-block">
                <a className="btn-square" href="https://www.youtube.com/channel/UCUCkH561i3VjDQPJrGdGFQQ" target="_blank"  rel="noopener noreferrer">
                  s'abonner aux vidéos
                </a>
              </div>
            </div>

          </div>
          {/* end of video-card */}

         <div className="video-card" id="second-video">

           <div className="video-description">
             <h6 className="rose-dawn">le dernier vlog</h6>
             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Ratione deserunt veniam aspernatur, error rem qui, sit vero quisquam hic
             perspiciatis earum repellendus aliquam aliquid beatae?
             Commodi accusamus non ratione minima.</p>
           </div>

           <div className="video-container">
             <img src="https://content.alexandralarouche.ca/wp-content/uploads/2019/06/placeholder-video.png" alt="placeholder video"/>
             <div className="btn-block">
               <a className="btn-square" href="https://www.youtube.com/channel/UCUCkH561i3VjDQPJrGdGFQQ" target="_blank"  rel="noopener noreferrer">
                 s'abonner aux vlogs
               </a>
             </div>
           </div>
         </div>
         {/* end of video-card */}


        </div>
      {/* end of video-section */}

        <div id="favoris-section">
          <h3>mes favoris du moment</h3>

          <div className="container">

            <div className="favoris-sm-card" id="homepage-premier-favori">
              <img src={favorisUn.featured_media.source_url} alt={favorisUn.acf.nom_marque} />
              <div className="favoris-sm-card-content">
                <p className="favoris-sm-card-title"><span>{favorisUn.title}</span></p>
                <p>{favorisUn.acf.nom_marque}</p>
                <a href={`/${favorisUn.acf.url_du_produit}`} target="_blank"  rel="noopener noreferrer">
                  à retrouver ici
                </a>
              </div>
            </div>
            {/* end of #premier favori */}

            <div className="favoris-sm-card" id="homepage-deuxieme-favori">
              <img src={favorisDeux.featured_media.source_url} alt={favorisDeux.acf.nom_marque} />
              <div className="favoris-sm-card-content">
                <p className="favoris-sm-card-title"><span>{favorisDeux.title}</span></p>
                <p>{favorisDeux.acf.nom_marque}</p>
                <a href={`/${favorisDeux.acf.url_du_produit}`} target="_blank"  rel="noopener noreferrer">
                  à retrouver ici
                </a>
              </div>
            </div>
           {/* end of #deuxieme favori */}

          </div>


         <div className="btn-block">
          <Link to="/" className="btn-square">voir tous les favoris</Link>
         </div>

        </div>
        {/* end of #favoris-section */}

        <Instagram />
        <Footer />

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

  wordpressPost(
    acf: {mise_en_avant: {eq: "true"}}){
    content
    title
    categories {
      name
      slug
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

  wordpressPage(title:  {eq:  "accueil"}) {
    acf {
      a_propos
    }
  }
}
`


