import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';

// import { extractTags } from '../helpers/extract-tags';
import { buildSeoTags } from '../utilities/seo';


class Page extends React.Component {

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
    const page = this.props.data.wordpressPage
    const seoTags = buildSeoTags(page.acf.seo_tags)
    return(
      <Layout>
        <SEO title={`${page.title}`} keywords={seoTags} id={page.slug ? `${page.slug}` : ''} />


        <h1 dangerouslySetInnerHTML={{__html: page.title}} />

        <div className="page-meta">
          <p className="date">{page.date}</p>
          { page.tags ? <p className="tags">{page.tags.map( tag => <Link key={tag.id} to={`/tags/${tag.slug}`}>{tag.name}</Link> )}</p> : ''}

        </div>

        <div dangerouslySetInnerHTML= {{__html: page.content}} />
      </Layout>


    )
  }
}


export const query = graphql`
  query($id: String!) {

    wordpressPage(id: { eq: $id }) {

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

export default Page;



