import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';

// import { extractTags } from '../helpers/extract-tags';
import { buildSeoTags } from '../utilities/seo';

const Post = ({ data }) => {

  const post = data.wordpressPost
  const featuredImage = post.featured_media.source_url
  const seoTags = buildSeoTags(post.acf.seo_tags)

  return(
    <Layout>
    <div>
    <SEO title={`${post.title}`} keywords={seoTags} id={post.slug ? `${post.slug}` : ''} />

      {/* featured image */}
      <img src={featuredImage} alt=""/>

      <h1 dangerouslySetInnerHTML={{__html: post.title}} />

      <div className="post-meta">
        <p className="date">{post.date}</p>
        { post.tags ? <p className="tags">{post.tags.map( tag => <Link key={tag.id} to={`/tags/${tag.slug}`}>{tag.name}</Link> )}</p> : ''}

      </div>

      <div dangerouslySetInnerHTML= {{__html: post.content}} />

    </div>
    </Layout>
  )
}
export default Post;

export const query = graphql`
  query($id: String!) {

    wordpressPost(id: { eq: $id }) {

      featured_media {
        source_url
      }

      acf {
        seo_tags
      }

      title
      date(formatString: "Do MMMM YYYY")
      content
      slug
    }
  }
`


