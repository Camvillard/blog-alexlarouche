// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import { createExcerpt, createPrintedDate } from "../utilities/blog-cards"

// styles & assets
import '../styles/main.scss';

const FavorisSmallCard = ({favori}) => {

  return(
    <div className="favoris-sm-card">

      <img src={favori.featured_media.source_url} alt={favori.title}/>

      <div className="favoris-sm-card-content">
        <h3 className="favoris-sm-card-title">{favori.title}</h3>
        <p>{favori.acf.nom_marque}</p>
        <a href={`/${favori.acf.url_du_produit}`}>à retrouver ici</a>
      </div>

    </div>
  )

}

// const FavorisLargeCard = ({favori}) => {
//   return(
//     <div className="favoris-lg-card">

//       <img src={favori.featured_media.source_url} alt={favori.title}/>

//       <div className="favoris-lg-card-content">
//         <h3 className="favoris-lg-card-title">{favori.title}</h3>
//         <p>{favori.acf.nom_marque}</p>
//         <a href={`/${favori.acf.url_du_produit}`}>à retrouver ici</a>
//       </div>

//     </div>
//   )

// }



export default { FavorisSmallCard };
