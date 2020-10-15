// external libs
import React from "react"

// styles & assets
import SocialIcons from "../components/social-icons"
import { Logo } from "../components/logo"
import "../styles/maintenance.scss"

const Index = () => {
  return (
    <div className="maintenance-wrapper">
      <div className="maintenance-content">
        <Logo />
        <h3>maintenance</h3>
        <p>
          le blog est présentement en maintenance, merci de revenir un petit peu
          plus tard.
        </p>
        <SocialIcons id={"social-icons-navbar"} />
      </div>
    </div>
  )
}

export default Index
