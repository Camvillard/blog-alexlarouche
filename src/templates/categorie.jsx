// external libs
import React from 'react';
import { graphql } from 'gatsby';

// internal stuff
import Layout from '../components/layout';
import RegularPostCard from "../components/regular-post-card"
import MailchimpForm from "../components/mailchimp-form";

// helpers

// styles & assets
import '../styles/main.scss';


class Categorie extends React.Component {

  componentDidMount() {
    const allImages = document.querySelectorAll('img')
    allImages.forEach( img => {
      img.addEventListener('contextmenu', e => {
        e.preventDefault()
        alert('le clic droit est désactivé pour les photos')
      })
    })
  }

  render(){
    const category = this.props.data.wordpressCategory
    const blogPosts = this.props.data.allWordpressPost.edges
    const postCount = this.props.data.allWordpressPost.totalCount
    return(
      <Layout>
        <div id="category-header">
          <h4>catégorie</h4>
          <h3>{category.name} <span className="total-count-number">({postCount})</span></h3>
        </div>

        <div id="category-post-container">
          {blogPosts.map( post => <RegularPostCard post={post.node} key={post.node.id}/> )}
        </div>

        <MailchimpForm />

      </Layout>
    )
  }

}

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
export default Categorie;

