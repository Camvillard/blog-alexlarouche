// external libs
import React from "react"

// images & assets
import { FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa"

// styles

const SocialIcons = props => {
  return (
    <div id={props.id}>
      {/* <div id="youtube" className="icon-pink">
        <a
          href="https://www.youtube.com/channel/UCUCkH561i3VjDQPJrGdGFQQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div> */}

      <div id="youtube-vlogs" className="icon-white">
        <a
          href="https://www.youtube.com/user/alexfbvlogs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
          {/* <FaYoutube stroke="#C99086" strokeWidth="18" /> */}
        </a>
      </div>

      <div id="instagram" className="icon-pink">
        <a
          href="https://www.instagram.com/alexandralarouche/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>

      <div id="pinterest" className="icon-pink">
        <a
          href="https://www.pinterest.fr/alexandralarouche1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaPinterest />
        </a>
      </div>
    </div>
  )
}

export default SocialIcons
