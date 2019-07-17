// external libs
import React from 'react';
import { graphql, Link } from 'gatsby';

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

  render(){
  const post = this.data.wordpressPost
  let featuredImage
  if (post.featured_media) {
    featuredImage = post.featured_media.source_url
  } else {
    featuredImage = "https://content.alexandralarouche.ca/wp-content/uploads/2019/06/placeholder-10.jpg"
  }
  const seoTags = buildSeoTags(post.acf.seo_tags)
  const comments = this.data.allWordpressWpComments.edges
  const postDate = createPrintedDate(post.date)
    return(
      <Layout>
        <SEO title={`${post.title}`} keywords={seoTags} id={post.slug ? `${post.slug}` : ''} />

        <div className="single-post-container">
          {/* featured image*/}

          {post.featured_media ?
            <img src={featuredImage} alt={post.title} className="post-featured-image"/> :
             <span></span>}



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

          <h2><span dangerouslySetInnerHTML={{__html: post.title}} /></h2>

          <div dangerouslySetInnerHTML= {{__html: post.content}} />

          <div className="comments-container">
            <h3>laisser un commentaire</h3>
            <CommentForm />
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

