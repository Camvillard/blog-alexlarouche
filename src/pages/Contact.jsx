// external libs
import React from "react";
import { Link } from "gatsby";

// internal stuff
import Layout from "../components/layout";
import SEO from "../components/seo";
import meta from "../data/meta";


// styles & assets

class ContactPage extends React.Component {
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

    return(
      <div id="contact-page">

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

      </div>


    )
  }
}


export default ContactPage
