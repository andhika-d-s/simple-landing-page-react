import { motion } from "framer-motion";
import React, { Component } from "react";
import "./contact.css";

export class Contact extends Component {
  render() {
    return (
      <div className="contact-us" id="contact">
        <div className="image-contact">
          <img
            className="img"
            src="https://cdn.pixabay.com/photo/2020/04/01/19/36/showcase-4992402_960_720.jpg"
          />
        </div>
        <div className="contact">
          <div className="contact-title">
            <h4>Our</h4>
            <h1>Contact</h1>
          </div>
          <div>
            <p>Phone: 0363 47821</p>
            <p>Email: myPatiserrie@gmail.com</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
