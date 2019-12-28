import React, { Component } from 'react'
import Logo from "../../images/logo/logo.png"
import {FaAngleRight} from "react-icons/fa"
import {Link} from "gatsby"
import Navs from './Navs'

export default class Navbar extends Component {

    state = {
        scrolled: false
    }

    componentDidMount() {
        window.addEventListener("scroll", ()=> {
            let pageScroll = window.scrollY > 800;

            if (pageScroll) {
                this.setState ({
                    scrolled: true
                })
            } else {
                this.setState ({
                    scrolled: false
                })
            }
        })
    }

    // componentWillUnmount() {
    //     window.removeEventListener("scroll");
    // }

    render() {
        return (
            <header className={`${this.state.scrolled ? "navbar-fixed-top" : ""}`}>
                <nav className="navbar navbar-expand-lg sticky-top">
                    <div className="container">
            
                        <Link className="navbar-brand" to="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
            
                        <Navs style="ml-auto"/>
                    </div>
                </nav>
            </header>
        )
    }
}

