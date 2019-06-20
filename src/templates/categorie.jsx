import React from 'react';
import { graphql, Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';

// import { extractTags } from '../helpers/extract-tags';
import { buildSeoTags } from '../utilities/seo';

const Categorie = ({ data }) => {

  // const page = data.wordpressPage
  // const seoTags = buildSeoTags(page.acf.seo_tags)

  return(
    <div> to do categories</div>
  )
}
export default Categorie;

// export const query = graphql`
//   query($id: String!) {

//     wordpressPage(id: { eq: $id }) {

//       acf {
//         seo_tags
//       }

//       title
//       date(formatString: "Do MMMM YYYY")
//       content
//       slug
//     }
//   }
// `


