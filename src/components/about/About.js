import React, { Component } from "react";
import "./about.css";

export class About extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <div className="about" id="about">
          <div className="img-about">
            <img
              src="https://cdn.pixabay.com/photo/2017/10/04/14/18/basket-2816374_960_720.png"
              alt="bread-about"
            />
          </div>
          <section className="about-us">
            <h1>About <br/> myPatisserie</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              lacinia ornare sem, a ullamcorper risus tincidunt nec. Vestibulum
              nisl nunc, egestas vel tincidunt non, semper non nisi. Sed mattis
              vitae erat ac porttitor. In dictum quam nunc, ultricies lobortis
              lectus rutrum ac. Vivamus eget orci nec dolor ultrices consectetur
              eget mollis nisi. Etiam dignissim efficitur commodo. Duis nec
              ligula iaculis, porttitor tortor nec, ultrices ligula. Vivamus
              egestas neque vel placerat malesuada.
            </p>
          </section>
        </div>
      </div>
    );
  }
}

export default About;
