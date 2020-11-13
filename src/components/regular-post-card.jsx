// external libs
import React from "react"
import { Link } from "gatsby"

// internal stuff
import { createExcerpt, createPrintedDate } from "../utilities/blog-cards"
import { placeholderLink } from "../utilities/placeholder"

// styles & assets
import "../styles/main.scss"

const RegularPostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="post-card-meta">
        <p>
          {createPrintedDate(post.date)} /{" "}
          <Link to={`/categories/${post.categories[0].slug}`}>
            {post.categories[0].name}
          </Link>
        </p>
      </div>

      {post.featured_media ? (
        <img src={post.featured_media.source_url} alt={post.title} />
      ) : (
        <img src={placeholderLink} alt={post.title} />
      )}

      <div className="post-card-content">
        <Link to={`/${post.slug}`}>
          <h3 className="post-card-title">
            <span dangerouslySetInnerHTML={{ __html: post.title }} />
          </h3>
        </Link>
        <div
          className="post-card-excerpt"
          dangerouslySetInnerHTML={{ __html: createExcerpt(post.content) }}
        />
        <div className="btn-block-left">
          <Link to={`/${post.slug}`} className="btn-plain">
            lire la suite
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegularPostCard
