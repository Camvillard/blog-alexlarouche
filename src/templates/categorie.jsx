// external libs
import React from 'react';
import { graphql, Link } from 'gatsby';

// internal stuff
import SEO from '../components/seo';
import Layout from '../components/layout';
import RegularPostCard from "../components/regular-post-card"
import MailchimpForm from "../components/mailchimp-form";

// helpers

// styles & assets
import '../styles/main.scss';

const Categorie = ({ data }) => {

  const category = data.wordpressCategory
  const blogPosts = data.allWordpressPost.edges
  const postCount = data.allWordpressPost.totalCount
  // const seoTags = buildSeoTags(page.acf.seo_tags)

  console.log(blogPosts)
  return(
    <Layout>

      <div id="category-header">
        <h4>catégorie</h4>
        <h3>{category.name} <span className="total-count-number">({postCount})</span></h3>
      </div>

      <div id="category-post-container">
        {blogPosts.map( post => <RegularPostCard post={post.node} key={post.node.id}/> )}
      </div>

    </Layout>
  )
}
export default Categorie;

export const query = graphql`
  query($id: String!) {

    wordpressCategory(id: { eq: $id }) {
      id
      name
      slug
      count
    }

    allWordpressPost(filter: {categories: {elemMatch: {id: {eq: $id}}}}) {
      totalCount
       edges {
         node {
           id
           date
           title
           content
           featured_media{
             source_url
           }
           categories {
             id
             name
             slug
           }
         }
       }
    }
  }
`


