import { motion } from "framer-motion";
import React, { useState } from "react";
import "./card.css";
import { testimonial } from "./testimonial";

function ListTestimonial() {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <motion.div className="costumer-testimonial" 
      initial={{x: 100, opacity: 0}}
      animate={{x: 0, opacity: 1}}
    >
      <div className="card-container">
        {
          <div className={`testimoni-card`}>
            <q>{testimonial[currentImg].quote}</q>
            <div className="author">
              <img
                src={testimonial[currentImg].avatar}
                alt={`quote-${testimonial[currentImg].author}`}
              />
              <p className="author-name">
                - {testimonial[currentImg].author}
              </p>
            </div>
          </div>
        }
      </div>
      <div className="control">
        <a
          onClick={() => {
            currentImg > 0 && setCurrentImg(currentImg - 1);
          }}
        >
          <i className="fa fa-chevron-left left" aria-hidden="true"></i>
        </a>
        <a
          onClick={() => {
            currentImg < testimonial.length - 1 &&
              setCurrentImg(currentImg + 1);
          }}
        >
          <i className="fa fa-chevron-right right" aria-hidden="true"></i>
        </a>
      </div>
    </motion.div>
  );
}

export default ListTestimonial;
