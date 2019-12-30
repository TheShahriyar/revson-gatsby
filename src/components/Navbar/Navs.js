import React from 'react'
import {Link} from "gatsby"
import {FaAngleRight} from "react-icons/fa"

const Navs = ({style}) => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`navbar-nav ${style}`}>
                <li className="nav-item drop">
                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Homepage
                    </a>
                    <ul className="drop-down" aria-labelledby="navbarDropdown">
                        <li><Link to="/">Homepage 1</Link></li>
                        <li><Link to="/homepage2/">Homepage 2</Link></li>
                        <li><Link to="/homepage3/">Homepage 3</Link></li>
                        <li><Link to="/homepage4/">Homepage 4</Link></li>
                        <li><Link to="/homepage5/">Homepage 5</Link></li>
                        <li><Link to="/homepage6/">Homepage 6</Link></li>
                        <li><Link to="/homepage7/">Homepage 7</Link></li>
                    </ul>
                </li>
                <li className="nav-item drop">
                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Features
                    </a>
                    <ul className="drop-down">
                        <li>
                            <a href="#">Header<FaAngleRight/></a>
                            <ul className="drop-down level3">
                                <li><Link to="header1">Header 1</Link></li>
                                <li><Link to="header2">Header 2</Link></li>
                                <li><Link to="header3">Header 3</Link></li>
                                <li><Link to="header4">Header 4</Link></li>
                                <li><Link to="header5">Header 5</Link></li>
                                <li><Link to="header6">Header 6</Link></li>
                                <li><Link to="header7">Header 7</Link></li>
                                <li><Link to="header8">Header 8</Link></li>
                            </ul>
                        </li>
                        <li><a href="#">Slideshow<FaAngleRight/></a>
                            <ul className="drop-down level3">
                                <li><Link to="sliderbootstrap">Bootstrap Slider</Link></li>
                                <li><Link to="banner1">Banner 1</Link></li>
                                <li><Link to="banner2">Banner 2</Link></li>
                                <li><Link to="banner3">Banner 3</Link></li>
                                <li><Link to="bannervideobg">Banner Video BG</Link></li>
                            </ul>
                        </li>
                        <li><a href="#">Footer<FaAngleRight/></a>
                            <ul className="drop-down level3">
                                <li><Link to="footer1">Footer 1</Link></li>
                                <li><Link to="footer2">Footer 2</Link></li>
                                <li><Link to="footer3">Footer 3</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="nav-item drop">
                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                    </a>
                    <ul className="drop-down" aria-labelledby="navbarDropdown">
                        <li><Link to="aboutUs1">About Us 1</Link></li>
                        <li><Link to="aboutUs2">About Us 2</Link></li>
                        <li><Link to="servicePage1">Service Page 1</Link></li>
                        <li><Link to="servicePage1">Service Page 2</Link></li>
                        <li><Link to="teamMember">Team Member</Link></li>
                        <li><Link to="contact">Contact Page</Link></li>
                        <li><Link to="faq">F.A.Q</Link></li>
                    </ul>
                </li>
                <li className="nav-item drop">
                    <Link className="nav-link" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Portfolio
                    </Link>
                    <ul className="drop-down" aria-labelledby="navbarDropdown">
                        <li><Link to="portfolio">Portfolio 2 Col St 1</Link></li>
                        <li><Link to="portfolio">Portfolio 2 Col St 2</Link></li>
                        <li><Link to="portfolio">Portfolio 3 Col St 1</Link></li>
                        <li><Link to="portfolio">Portfolio 3 Col St 2</Link></li>
                        <li><Link to="portfolio">Portfolio 4 Col St 1</Link></li>
                        <li><Link to="portfolio">Portfolio 4 Col St 2</Link></li>
                    </ul>
                </li>
                <li className="nav-item megadrop">
                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Elements
                    </a>
                    <div className="megadrop-down">
                        <div className="container">
                            <div className="dropdown w-100">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6">
                                        <ul>
                                            <li><Link to="alert">Alert</Link></li>
                                            <li><Link to="accordion">Accordion</Link></li>
                                            <li><Link to="animated-counter">Animated Counter</Link></li>
                                            <li><Link to="blockquote">Block Quote</Link></li>
                                            <li><Link to="blog-content">Blog Content</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <ul>
                                            <li><Link to="bootstrap-grid">Bootstrap Grid</Link></li>
                                            <li><Link to="slider-bootstrap">Carousel</Link></li>
                                            <li><Link to="call-to-action">Call to Action</Link></li>
                                            <li><Link to="client">Clients</Link></li>
                                            <li><Link to="divider">Divider</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <ul>
                                            <li><Link to="dropcap">Dropcap</Link></li>
                                            <li><Link to="error-page">Error</Link></li>
                                            <li><Link to="faq">F.A.Q</Link></li>
                                            <li><Link to="feature-page">Feature Box</Link></li>
                                            <li><Link to="img-content">Image Content</Link></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <ul className="last-child">
                                            <li><Link to="piechart">Pie Chart</Link></li>
                                            <li><Link to="pricing-table">Pricing Table</Link></li>
                                            <li><Link to="team">Team</Link></li>
                                            <li><Link to="testimonial">Testimonial</Link></li>
                                            <li><Link to="typography">Typography</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item drop">
                    <Link className="nav-link" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Blog
                    </Link>
                    <ul className="drop-down" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" to="blog">Blog Full Width</Link></li>
                        <li><Link className="dropdown-item" to="blog">Blog Left Sidebar</Link></li>
                        <li><Link className="dropdown-item" to="blog">Blog Right Sidebar</Link></li>
                        <li><Link className="dropdown-item" to="blog">Blog Single Page</Link></li>
                        <li><Link className="dropdown-item" to="blog">Single Left Sidebar</Link></li>
                        <li><Link className="dropdown-item" to="blog">Single Right Sidebar</Link></li>
                    </ul>
                </li>
                <li className="nav-item megadrop">
                    <Link className="nav-link" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contact
                    </Link>
                    <div className="megadrop-down">
                        <div className="container">
                            <div className="dropdown w-100">
                                <div className="row">
                                    <div className="col-md-8 col-sm-8">
                                        <div id="map" style={{height: "300px"}}>
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10500.899077973729!2d2.2913514943457605!3d48.85392413737372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6701f7e8337b5%3A0xa2cb58dd28914524!2sEiffel%20Tower%2C%20Paris%2C%20France!5e0!3m2!1sen!2sbd!4v1577514223123!5m2!1sen!2sbd" width="100%" height="100%" style={{border: "0"}}></iframe>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4">
                                        <div className="menu-contact">
                                            <div className="feature-2">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <div className="feature-icon text-center">
                                                            <i className="icon-map"></i>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <a to="#">
                                                            <h3 className="media-heading">ADDRESS</h3>
                                                        </a>
                                                        <p>Flat: 34/A, Plot: 345, City: Unknown, Country: Unknown</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="feature-2">
                                                <div className="media">
                                                    <div className="media-left">
                                                        <div className="feature-icon text-center">
                                                            <i className="icon-envelope"></i>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <a to="#">
                                                            <h3 className="media-heading">E-mail</h3>
                                                        </a>
                                                        <p>email@example.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="feature-2" style={{marginBottom: "0"}}>
                                                <div className="media">
                                                    <div className="media-left">
                                                        <div className="feature-icon text-center">
                                                            <i className="icon-phone"></i>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <a to="#">
                                                            <h3 className="media-heading">Phone</h3>
                                                        </a>
                                                        <p>+880123456789</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Navs
