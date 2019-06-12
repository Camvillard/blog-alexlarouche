// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import { createExcerpt, createPrintedDate } from "../utilities/blog-cards"

// styles & assets
import '../styles/main.scss';

const LastPostCard = ({post}) => {

  return(
    <div className="last-post-card">

      <p className="post-description">Le dernier billet</p>
      <img src={post.featured_media.source_url} alt={post.title}/>

      <div className="post-card-meta">
        <p className="published"><span> publié le :</span> {createPrintedDate(post.date)}  </p>
        <p className="categories"><span> catégories :</span> {post.categories[0].name}  </p>
      </div>

      <div className="post-card-content">
        <h3 className="post-card-title">{post.title}</h3>
        <div className="post-card-excerpt" dangerouslySetInnerHTML= {{__html: createExcerpt(post.content)}} />
        <div className="btn-square">
          <Link to={`/${post.slug}`}>lire la suite</Link>
        </div>
      </div>

    </div>
  )

}

export default LastPostCard;
