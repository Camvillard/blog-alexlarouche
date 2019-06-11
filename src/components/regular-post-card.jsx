// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import { createExcerpt, createPrintedDate } from "../utilities/blog-cards"

// styles & assets
import '../styles/main.scss';

const RegularPostCard = ({post}) => {

  return(
    <div className="post-card">

      <img src={post.featured_media.source_url} alt={post.title}/>

      <div className="post-card-meta">
        <p className="published">{createPrintedDate(post.date)}  </p>
        <p className="categories">{post.categories[0].name}  </p>

      </div>

      <div className="post-card-content">
        <h3 className="post-card-title">{post.title}</h3>
        <div className="post-card-excerpt" dangerouslySetInnerHTML= {{__html: createExcerpt(post.content)}} />
        <Link to={`/${post.slug}`} className="btn-square">lire la suite</Link>

      </div>

    </div>
  )

}

export default RegularPostCard;
