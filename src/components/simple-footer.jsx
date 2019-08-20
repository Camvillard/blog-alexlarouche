// external libs
import React from "react"
import { Link } from "gatsby"

const SimpleFooter = () => {
  return(
    <div className="back-button">
      <Link to="/" className="btn-blob">retour à l'accueil</Link>
    </div>
  )
}
export default SimpleFooter;
