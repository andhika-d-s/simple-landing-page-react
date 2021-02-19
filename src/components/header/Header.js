import { motion } from 'framer-motion'
import React, { Component } from 'react'
import './header.css'

export class Header extends Component {
    render() {
        return (
            <div className="container-hero">
                <header className="hero-web">
                    <div className="bg-hero"></div>
                    <motion.div className="hero-title"
                     initial={{x: -200, opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                     transition={{times: 0.5}}
                    >
                        <h2 className="title"> Our Quality</h2>
                        <h1 className="title-1">Product Sweet Bread with myPatisserie</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacinia ornare sem, a ullamcorper risus tincidunt nec.</p>
                    </motion.div>
                    <motion.div className="image-hero"
                     initial={{x: 200, opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                     transition={{times: 0.5}}
                    >
                        <img src="https://cdn.pixabay.com/photo/2017/09/01/19/05/breadbasket-2705179_960_720.png" alt="image-hero-cake"/>
                    </motion.div>
                </header>
            </div>
        )
    }
}

export default Header
