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

      <p className="post-description">le dernier billet</p>
      {post.featured_media ?
        <img src={post.featured_media.source_url} alt={post.title}/> :
         <img src="https://content.alexandralarouche.ca/wp-content/uploads/2019/06/placeholder-10.jpg" alt={post.title}/>
       }

      <div className="last-post-content">

        <div className="post-card-meta">
          <p className="published"><span> publié le : </span> {createPrintedDate(post.date)}</p>
          <Link className="categories" to={`/categories/${post.categories[0].slug}`}><span> catégorie : </span> {post.categories[0].name}</Link>
        </div>

        <div className="post-card-content">
          <h3 className="post-card-title"><span dangerouslySetInnerHTML={{__html: post.title}} /></h3>
          <div className="post-card-excerpt" dangerouslySetInnerHTML= {{__html: createExcerpt(post.content)}} />
          <div className="btn-block" >
            <Link to={`/${post.slug}`} className="btn-square">lire la suite</Link>
          </div>
        </div>

      </div>

    </div>
  )

}

export default LastPostCard;
