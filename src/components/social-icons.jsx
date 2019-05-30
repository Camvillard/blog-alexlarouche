// external libs
import React from "react";

// images & assets
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

// styles


const SocialIcons = (props) => {
  return(
    <div id={props.id}>
      <div id="instagram" className="social-icon-white">
      <a href="https://www.instagram.com/alexandralarouche/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      </div>

      <div id="youtube" className="social-icon-white">
      <a href="https://www.youtube.com/channel/UCUCkH561i3VjDQPJrGdGFQQ" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
        </a>
      </div>

      <div id="facebook" className="social-icon-white">
      <a href="https://www.facebook.com/alexfashionbeauty1" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
        </a>
      </div>
    </div>
  )
}


export default SocialIcons;

