// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import { createExcerpt, createPrintedDate } from "../utilities/blog-cards"

// styles & assets
import '../styles/main.scss';

const FeaturedPost = ({post}) => {

  return(
    <div className="featured-post-card">

      <div className="featured-post-images">
        <p className="post-description">en ce moment</p>
        <img id="first-img-featured" src={post.acf.image_supplementaire.source_url} alt={post.title}/>
        <img id="second-img-featured" src={post.featured_media.source_url} alt={post.title}/>
      </div>

      <div className="post-card-content">
        <Link to={post.slug}><h3 className="post-card-title"><span dangerouslySetInnerHTML={{__html: post.title}} /></h3></Link>
        <div className="post-card-excerpt" dangerouslySetInnerHTML= {{__html: createExcerpt(post.content)}} />
        <div className="btn-block">
          <Link to={`/${post.slug}`} className="btn-square">lire la suite</Link>
        </div>

        <div className="post-card-meta">
          <p className="published">{createPrintedDate(post.date)}</p>
          <Link className="categories" to={`/categories/${post.categories[0].slug}`}>{post.categories[0].name}</Link>
        </div>

      </div>


    </div>
  )

}

export default FeaturedPost;
