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

      <p className="post-description">en ce moment</p>
      <div className="featured-post-images">
        <img id="first-featured" src={post.acf.image_supplementaire.source_url} alt={post.title}/>
        <img id="second-featured" src={post.featured_media.source_url} alt={post.title}/>
      </div>

      <div className="post-card-content">
        <h3 className="post-card-title">{post.title}</h3>
        <div className="post-card-excerpt" dangerouslySetInnerHTML= {{__html: createExcerpt(post.content)}} />
        <div className="btn-square">
          <Link to={`/${post.slug}`}>lire la suite</Link>
        </div>
      </div>
      <div className="post-card-meta">
        <p className="published">{createPrintedDate(post.date)}  </p>
        <p className="categories">{post.categories[0].name}  </p>
      </div>

    </div>
  )

}

export default FeaturedPost;
