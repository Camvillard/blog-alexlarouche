import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';

// import { extractTags } from '../helpers/extract-tags';
import { buildSeoTags } from '../utilities/seo';
import { createPrintedDate } from "../utilities/blog-cards"


const Post = ({ data }) => {

  const post = data.wordpressPost
  const featuredImage = post.featured_media.source_url
  const seoTags = buildSeoTags(post.acf.seo_tags)
  const comments = data.allWordpressWpComments.edges[0]
  const postDate = createPrintedDate(post.date)


  return(
    <Layout>
    <div>


    <SEO title={`${post.title}`} keywords={seoTags} id={post.slug ? `${post.slug}` : ''} />

      {/* featured image*/}
      <img src={featuredImage} alt=""/>

      <div className="post-meta">
        <p className="date">{post.date}</p>
        { post.tags ? <p className="tags">{post.tags.map( tag => <Link key={tag.id} to={`/tags/${tag.slug}`}>{tag.name}</Link> )}</p> : <span></span>}
      
        { post.categories ? <p className="categories">{post.categories.map( cat => <Link key={cat.id} to={`/categories/${cat.slug}`}>{cat.name}</Link> )}</p> : <span></span>}

      </div>

      <h1 dangerouslySetInnerHTML={{__html: post.title}} />


      <div dangerouslySetInnerHTML= {{__html: post.content}} />

      <div>comments {comments.content}</div>


    </div>
    </Layout>
  )
}
export default Post;

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
      edges {
        node {
          id
          post
          content
          author_name
          author_url
          date
        }
      }
    }
  }
`


