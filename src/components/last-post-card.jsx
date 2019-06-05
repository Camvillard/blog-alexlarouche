// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import { createExcerpt } from "../utilities/blog-cards"

// styles & assets
import '../styles/main.scss';

const LastPostCard = ({post}) => {
  return(
    <div className="last-post-card">

      <h5>Le dernier billet</h5>
      <img src={post.featured_media.source_url} alt={post.title}/>

      <div className="blog-card-content">
        <div className="blog-card-excerpt" dangerouslySetInnerHTML= {{__html: createExcerpt(post.content)}} />
        <Link to={`/${post.slug}`} className="btn-square">lire la suite</Link>

      </div>

    </div>
  )

}

export default LastPostCard;
