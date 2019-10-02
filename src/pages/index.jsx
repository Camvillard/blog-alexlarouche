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
// import MailchimpForm from "../components/mailchimp-form";
// import FavorisSmallCard from "../components/favoris-card";
import Instagram from "../components/instagram";
import Footer from "../components/footer";

// helpers
// import { truncateWord } from "../utilities/blog-cards";


// styles & assets
import '../styles/main.scss';


class IndexPage extends React.Component {

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
    const data = this.props.data
    const metadata = data.site.siteMetadata
    const posts = data.allWordpressPost.edges
    const lastPost = posts[0].node
    const featuredPost = data.wordpressPost
    const firstSectionPosts = posts.slice(1,3)
    const secondSectionPosts = posts.slice(3,5)
    const aboutContent = data.wordpressPage.acf.a_propos
    const videoLink = data.wordpressPage.acf.last_video
    const videoText = data.wordpressPage.acf.last_video_text
    const vlogLink = data.wordpressPage.acf.last_vlog
    const vlogText = data.wordpressPage.acf.last_vlog_text
    const favorisUn = data.allWordpressWpFavoris.edges[0].node
    const favorisDeux = data.allWordpressWpFavoris.edges[1].node

    return(
      <div id="homepage-content">
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
                <Link to="/apropos" className="btn-plain">en savoir plus</Link>
              </div>
            </div>

          </div>
          {/* end of about section */}

        </div>
        {/* end of container */}

        <div id="favoris-section">
          <h3>mes favoris du moment</h3>

          <div className="container">

            <div className="favoris-sm-card" id="homepage-premier-favori">
              <img src={favorisUn.featured_media.source_url} alt={favorisUn.acf.nom_marque} />
              <div className="favoris-sm-card-content">
                <p className="favoris-sm-card-title"><span dangerouslySetInnerHTML= {{__html:favorisUn.title}} /></p>
                <p>{favorisUn.acf.nom_marque}</p>
                <a href={favorisUn.acf.url_du_produit} target="_blank"  rel="noopener noreferrer">
                  à retrouver ici
                </a>
              </div>
            </div>
            {/* end of #premier favori */}

            <div className="favoris-sm-card" id="homepage-deuxieme-favori">
              <img src={favorisDeux.featured_media.source_url} alt={favorisDeux.acf.nom_marque} />
              <div className="favoris-sm-card-content">
                <p className="favoris-sm-card-title"><span dangerouslySetInnerHTML= {{__html:favorisDeux.title}} /></p>
                <p>{favorisDeux.acf.nom_marque}</p>
                <a href={favorisDeux.acf.url_du_produit} target="_blank"  rel="noopener noreferrer">
                  à retrouver ici
                </a>
              </div>
            </div>
           {/* end of #deuxieme favori */}

          </div>


         <div className="btn-block">
          <Link to="/favoris" className="btn-square">voir tous les favoris</Link>
         </div>

        </div>
        {/* end of #favoris-section */}

        <div id="video-section" className="container">

          <div className="video-card" id="first-video">

            <div className="video-description">
              <h6 className="rose-dawn">la dernière vidéo</h6>
              <div dangerouslySetInnerHTML= {{__html: videoText}} />
            </div>

            <div className="video-container">
              <iframe
                src={`https://www.youtube.com/embed/${videoLink}`}
                title="derniere video"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
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
              <div dangerouslySetInnerHTML= {{__html: vlogText}} />
           </div>

           <div className="video-container">
             <iframe
               src={`https://www.youtube.com/embed/${vlogLink}`}
               frameBorder="0"
               title="dernier vlog"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen>
             </iframe>
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
      last_video
      last_video_text
      last_vlog
      last_vlog_text
      seo_tags
    }
  }
}





`


