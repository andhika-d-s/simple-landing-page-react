import React, { Component } from 'react'
import ListTestimonial from './list/listTestimonial'
import './testimonial.css'

export class Testimonial extends Component {
    render() {
        return (
            <div className="testimonial" id="testimoni">
                <div className="testimonial-group">
                    <div className="title-testimonial">
                        <h4>Testimonial</h4>
                        <h1>Hear From <br/>Our Costumer</h1>
                    </div>
                    <ListTestimonial />
                </div>
            </div>
        )
    }
}

export default Testimonial
