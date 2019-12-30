import React, { Component } from 'react'
import Navs from './Navs'

export default class NavbarStyle2 extends Component {

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
        const {style} = this.props;
        return (
            <header className={`${this.state.scrolled ? "navbar-fixed-top" : ""}`}>
                <nav className={`navbar navbar-expand-lg bottom-nav boxed-width ${style}`}>
                    <div className="container">
            
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
            
                        <Navs/>
                    </div>
                </nav>
            </header>
        )
    }
}

