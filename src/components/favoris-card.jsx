// external libs
import React from "react";

// internal stuff

// styles & assets
import '../styles/main.scss';

const FavorisSmallCard = ({favori}) => {

  return(
    <div className="favoris-sm-card">

      <img src={favori.featured_media.source_url} alt={favori.title}/>

      <div className="favoris-sm-card-content">
        <h3 className="favoris-sm-card-title"><span dangerouslySetInnerHTML={{__html: favori.title}} /></h3>
        <p>{favori.acf.nom_marque}</p>
        <a href={`/${favori.acf.url_du_produit}`}>à retrouver ici</a>
      </div>

    </div>
  )

}




export default { FavorisSmallCard};
