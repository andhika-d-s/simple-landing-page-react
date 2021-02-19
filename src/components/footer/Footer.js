import React, { Component } from 'react'
import './footer.css'

export class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            social: [
                {
                    title: "instagram"
                },
                {
                    title: "facebook-square"
                },
                {
                    title: "twitter"
                }
            ]
        } 
    }

    render() {
        return (
            <div>
                <hr/>
                <footer className="footer-web">
                <div className="footer-logo">
                    <img className="logo" src={this.props.logo}/>
                </div>
                    <div className="sitemap">
                        <h3>Sitemap</h3>
                        <div className="sitemap-list">
                            <a className="sitemap-link" href="#">Home</a>
                            <a className="sitemap-link" href="#">About</a>
                            <a className="sitemap-link" href="#">Menu</a>
                            <a className="sitemap-link" href="#">Contact Us</a>
                        </div>
                    </div>
                    <div className="footer-social">
                        <h2>Follow Our Social Media</h2>
                        <div className="social">
                            {
                                this.state.social.map((data, index) => {
                                    return(
                                        <i key={index} className={`fa fa-${data.title} logo-sosmed`} aria-hidden="true"></i> 
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div></div>
                    <div className="copyright">
                        <p>Create 2020</p>
                    </div>
                    <div></div>
                </footer>
            </div>
        )
    }
}

export default Footer
