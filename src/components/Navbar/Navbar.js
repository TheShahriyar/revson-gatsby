import React, { Component } from 'react'
import Logo from "../../images/logo/logo.png"
import {FaFacebook} from "react-icons/fa"

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

    componentWillUnmount() {
        window.removeEventListener("scroll");
    }

    render() {
        return (
            <header className={`${this.state.scrolled ? "navbar-fixed-top" : ""}`}>
                <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
                    <div className="container">
            
                        <a className="navbar-brand" href="/">
                            <img src={Logo} alt="Logo" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
            
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"><FaFacebook/> Link</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Dropdown
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li>
                                            <a className="dropdown-item" href="#">Action 1</a>
                                            <ul className="dropdown-menu level3">
                                                <li><a href="slideshow-1.html">Revolution 1</a></li>
                                                <li><a href="slideshow-2.html">Revolution 2</a></li>
                                                <li><a href="slider-bootstrap.html">Bootstrap Slider</a></li>
                                                <li><a href="banner-1.html">Banner 1</a></li>
                                                <li><a href="banner-2.html">Banner 2</a></li>
                                                <li><a href="banner-3.html">Banner 3</a></li>
                                                <li><a href="banner-video-bg.html">Banner Video BG</a></li>
                                            </ul>
                                        </li>
                                        <li><a className="dropdown-item" href="#">Action 2</a></li>
                                        <li><a className="dropdown-item" href="#">Action 3</a></li>
                                        <li><a className="dropdown-item" href="#">Action 4</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

