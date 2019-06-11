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

      <div className="post-card-meta">
        <p>{createPrintedDate(post.date)} / {post.categories[0].name}</p>
      </div>

      <img src={post.featured_media.source_url} alt={post.title}/>

      <div className="post-card-content">
        <h3 className="post-card-title">{post.title}</h3>
        <div className="post-card-excerpt" dangerouslySetInnerHTML= {{__html: createExcerpt(post.content)}} />
        <div className="btn-plain">
          <Link to={`/${post.slug}`}>lire la suite</Link>
        </div>

      </div>

    </div>
  )

}

export default RegularPostCard;
