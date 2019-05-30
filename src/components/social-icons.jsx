// external libs
import React from "react";

// images & assets
import { FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

// styles


const SocialIcons = (props) => {
  return(
    <div id={props.id}>
      <div id="instagram" className="social-icon-white">
      <a href="https://instagram.com/plaatine" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      </div>

      <div id="twitter" className="social-icon-white">
      <a href="https://twitter.com/Plaatine" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
        </a>
      </div>

      <div id="facebook" className="social-icon-white">
      <a href="https://www.facebook.com/Platine-413064029464479/" target="_blank" rel="noopener noreferrer">
        <FaFacebookF />
        </a>
      </div>
    </div>
  )
}


export default SocialIcons;

