// external libs
import React from "react";

// images & assets
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

// styles


const SocialIcons = (props) => {
  return(
    <div id={props.id}>
      <div id="instagram">
      <a href="https://www.instagram.com/alexandralarouche/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      </div>

      <div id="youtube">
      <a href="https://www.youtube.com/channel/UCUCkH561i3VjDQPJrGdGFQQ" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
        </a>
      </div>

      <div id="youtube-vlogs">
      <a href="https://www.youtube.com/channel/UCUCkH561i3VjDQPJrGdGFQQ" target="_blank" rel="noopener noreferrer">
        <FaYoutube stroke="#C99086" strokeWidth="18" />
        </a>
      </div>

      <div id="facebook">
      <a href="https://www.facebook.com/alexfashionbeauty1" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
        </a>
      </div>
    </div>
  )
}


export default SocialIcons;

