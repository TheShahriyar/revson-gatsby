import React, { Component } from "react"
import Navs from "./Navs"

export default class NavbarStyle2 extends Component {
  state = {
    scrolled: false,
  }

  render() {
    const { navbarStyle } = this.props
    return (
      <header>
        <nav
          className={`navbar navbar-expand-lg bottom-nav ${navbarStyle}`}
        >
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <Navs />
          </div>
        </nav>
      </header>
    )
  }
}
