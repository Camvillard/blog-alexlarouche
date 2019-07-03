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
        <p>{createPrintedDate(post.date)} / <Link to={`/categories/${post.categories[0].slug}`}>{post.categories[0].name}</Link></p>
      </div>

      {post.featured_media ?
        <img src={post.featured_media.source_url} alt={post.title}/> :
         <img src="https://content.alexandralarouche.ca/wp-content/uploads/2019/06/placeholder-10.jpg" alt={post.title}/>
       }

      <div className="post-card-content">
        <h3 className="post-card-title">{post.title}</h3>
        <div className="post-card-excerpt" dangerouslySetInnerHTML= {{__html: createExcerpt(post.content)}} />
        <div className="btn-block-left">
          <Link to={`/${post.slug}`} className="btn-plain">lire la suite</Link>
        </div>

      </div>

    </div>
  )

}

export default RegularPostCard;
