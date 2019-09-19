// external libs
import React from 'react';
import { graphql, Link } from 'gatsby';
import Helmet from "react-helmet";


// internal stuff
import SEO from '../components/seo';
import Layout from '../components/layout';
import CommentForm from '../components/comment-form';

// helpers
import { buildSeoTags } from '../utilities/seo';
import { createPrintedDate, pluralizeWord } from "../utilities/blog-cards"

// styles & assets

const CommentItem = ({comment}) => {
  return(
    <div className={`comment-item ${comment.author === 1 ? 'comment-alex' : ''}`}>
      <div className="comment-avatar">
        <img src={comment.author_avatar_urls.wordpress_96} className="img-circle" alt={comment.author_name}/>
      </div>

      <div className="comment-content">
        <p className="comment-author"><a href={comment.author_url} target="_blank" rel="noopener noreferrer">{comment.author_name}</a></p>
        <p className="comment-date">{createPrintedDate(comment.date)}</p>
        <p dangerouslySetInnerHTML={{__html: comment.content}}/>
      </div>
    </div>
  )
}


class Post extends React.Component {

  componentDidMount() {
    // disable  right click on images
    const allImages = document.querySelectorAll('img')
    allImages.forEach( img => {
      // prevent  right click
      img.addEventListener('contextmenu', e => {
        e.preventDefault()
        alert('le clic droit est désactivé pour les photos')
      })
      // append pinterest button
      const pinLink = "<div class='pinterest-btn-container'><a class='pinterest-btn' href='https://www.pinterest.com/pin/create/button/' data-pin-round='true' data-pin-do='buttonBookmark'></a></div> ";
      img.insertAdjacentHTML('afterend', pinLink )
    })

    // load  instagram script
    if (window.instgrm) {
       window.instgrm.Embeds.process();
    }

    // pinterest pin it button
    if (!window.doBuild) {
      this.preloadWidgetScript();
    } else {
      window.doBuild();
    }

    // slider stuff
    const sliderContainer = document.querySelector('.slider-alex')
    this.loadCarousel(sliderContainer)

  }

  preloadWidgetScript = () => {
    const script = document.createElement('script');
    script.async = true;
    script.dataset.pinBuild = 'doBuild';
    script.src = '//assets.pinterest.com/js/pinit.js';
    document.body.appendChild(script);
  }

  loadCarousel = (container) =>  {
    // add navigation commands
    container.insertAdjacentHTML('beforebegin', '<span class="slider-nav button-prev">avant<span>')
    container.insertAdjacentHTML('beforebegin', '<span class="slider-nav button-next">après<span>')
    const previousButton = document.querySelector('.button-prev')
    const nextButton = document.querySelector('.button-next')

    //  select items in the carousel and remove the default hidden display on the 3 first
    let listItems = container.querySelectorAll('li.blocks-gallery-item')
    let listValues = Object.values(listItems)
    listValues.slice(4).forEach(  i => i.classList.add('hide-slide'));

    nextButton.addEventListener('click', e => {
      // take the first element of the container
      const firstElement = listValues.shift()
      // remove it from the carousel
      container.removeChild(firstElement)
      // add the visibility to the new first 3 elements
      container.appendChild(firstElement)
      listItems = container.querySelectorAll('li.blocks-gallery-item')
      listValues = Object.values(listItems)
      listValues.slice(0,4).forEach(  i => i.classList.remove('hide-slide'));
      listValues.slice(4).forEach(  i => i.classList.add('hide-slide'));
      }) //  end of  event listener

    previousButton.addEventListener('click', e => {
      // take the first element of the container
      const lastElement = listValues.pop()
      const firstElement = listValues.shift()
      // remove it from the carousel
      container.removeChild(lastElement)
      // add the visibility to the new first 3 elements
      container.insertBefore(lastElement, firstElement)
      listItems = container.querySelectorAll('li.blocks-gallery-item')
      listValues = Object.values(listItems)
      listValues.slice(0,4).forEach(  i => i.classList.remove('hide-slide'));
      listValues.slice(4).forEach(  i => i.classList.add('hide-slide'));
      }) //  end of  event listener

    } //  end of loadCarousel()


  // used to check if there is a fetured image set in wordpress
  // if not, assign a geatured image  to a placeholder
  // @post is the data pulled from Wordpress
  setFeaturedImage = (post) => {
    let featuredImage
    if (post.featured_media) {
      featuredImage = post.featured_media.source_url
    } else {
      featuredImage = "https://content.alexandralarouche.ca/wp-content/uploads/2019/06/placeholder-10.jpg"
    }
    return featuredImage
  }

  render(){
  const post = this.props.data.wordpressPost
  const seoTags = buildSeoTags(post.acf.seo_tags)
  const featuredImage = this.setFeaturedImage(post)
  const comments = this.props.data.allWordpressWpComments.edges
  const postDate = createPrintedDate(post.date)
    return(
      <Layout>
        <SEO title={`${post.title}`} keywords={seoTags} id={post.slug ? `${post.slug}` : ''} />

        {/* Helmet is used to load library for embedded Instagram posts */}
        <Helmet>
          {<script async defer src="//www.instagram.com/embed.js"></script>}
        </Helmet>

        <div className="single-post-container">



          <h2><span dangerouslySetInnerHTML={{__html: post.title}} /></h2>
          <img src={featuredImage} alt={post.title} className="post-featured-image"/>

          {/* meta for the post */}
          <div className="single-post-meta">
            <p className="date"><span>publié le : </span>{postDate}</p>
            { post.categories ?
              <p className="categories">
                <span>{pluralizeWord(post.categories, 'catégorie')} : </span>
                {post.categories.map( cat => <Link key={cat.id} to={`/categories/${cat.slug}`}>{cat.name}</Link> )}
              </p> :
              <span></span>}
          </div>
          {/* end of .single-post-meta */}

          <div dangerouslySetInnerHTML= {{__html: post.content}} />

          <div className="comments-container">
            <h3>laisser un commentaire</h3>
            <CommentForm post_id={post.wordpress_id} />
            <div id="comment-validation"></div>
            <h3>tous les commentaires</h3>
            {comments ?
              comments.map( c => <CommentItem comment={c.node} key={c.node.id} />):
              <p>il n'y a aucun commentaire pour le moment</p> }
          </div>
          {/* end of .comments-container */}

        </div>
      {/* end of .single-post-container */}

      </Layout>
    )

  }

}



export const query = graphql`
  query($id: String!, $postId: Int!) {

    wordpressPost(id: { eq: $id }) {

      featured_media {
        source_url
      }

      acf {
        seo_tags
      }
      wordpress_id
      title
      date
      content
      slug
      categories {
        id
        name
        slug
      }
    }

    allWordpressWpComments(filter: {post: {eq: $postId}}){
      totalCount
      edges {
        node {
          id
          post
          content
          author
          author_name
          author_url
          date
          author_avatar_urls {
            wordpress_96
          }
        }
      }
    }
  }
`

export default Post;

