// external libs
import React from "react";
import { graphql } from "gatsby";

// internal stuff
import SEO from "../components/seo";
import SimpleFooter from "../components/simple-footer";

// styles & assets
import '../styles/main.scss';


class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }

  handleBlur = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]:  e.target.value
    })
  }

  handleSubmit = (e) => {
    // e.preventDefault()
    // console.log(this.state)
  }

  render() {
    const metadata = this.props.data.site.siteMetadata
    return(
      <div id="contact-page">
        <SEO title="Home" keywords={metadata.seo} />

        <h1 className="main-page-title">contact</h1>

        <form
          action="/merci"
          method="post"
          name="Contact Form"
          className="form-white contact-form"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          >

          {/* specifying name of  the form for Netlify */}
          <input type="hidden" name="form-name" value="Contact Form" />
          {/* need a bot */}
          <input type="hidden" name="bot-field" />
          <div className="form-element">
            <label htmlFor="">nom, prénom :</label>
            <input type="text" name="name" onBlur={this.handleBlur}/>
          </div>

          <div className="form-element">
            <label htmlFor="">adresse courriel :</label>
            <input type="email" name="email" onBlur={this.handleBlur}/>
          </div>

          <div className="form-element">
            <label htmlFor="">objet du message :</label>
            <input type="text" name="subject" onBlur={this.handleBlur}/>
          </div>

          <div className="form-element">
            <label htmlFor="">message :</label>
            <textarea name="message" id="" cols="30" rows="14" onBlur={this.handleBlur}></textarea>
          </div>

          <div className="form-element">
              <button className="btn-plain">envoyer</button>
          </div>

        </form>

        <SimpleFooter />

      </div>


    )
  }
}


export default Contact

export const query = graphql`
query forContactPage {

  site {
    siteMetadata {
      title
      seo
    }
  }
}
`
