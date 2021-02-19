import React, { Component } from 'react'
import './nav.css'

export class navbar extends Component {
    state = {
        barsClicked: false,
        bgtransparent: false
    }

    handleClick = () => {
        this.setState({barsClicked: !this.state.barsClicked})
        console.log('clicked')
    } 
    
    render() {
        return (
            <div className="container">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <img className="logo" src={this.props.logo}/>
                        {this.state.barsClicked ? 
                        <i onClick={this.handleClick} className="fa fa-times" aria-hidden="true"></i>   
                        :
                        <i onClick={this.handleClick} id="barsButton" className="fa fa-bars" aria-hidden="true"></i> 
                        }
                    </div>
                    <div className={this.state.barsClicked ? 'menu active' : 'menu'} id="mobileMenu">
                        <a className="nav-link" href="#">Home</a>
                        <a className="nav-link" href="#about">About</a>
                        <a className="nav-link" href="#product">Menu</a>
                        <a className="nav-link" href="#contact">Contact Us</a>
                    </div>
                </nav>
            </div>
        )
    }
}

export default navbar
