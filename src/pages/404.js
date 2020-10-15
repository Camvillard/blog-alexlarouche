// external libs
import React from "react"

// internal stuff
import SEO from "../components/seo"
import meta from "../data/meta"

// styles & assets

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" keywords={meta.seo.keywords} />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
