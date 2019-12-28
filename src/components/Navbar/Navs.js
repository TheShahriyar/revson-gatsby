import React from 'react'
import {Link} from "gatsby"
import Logo from "../../images/logo/logo.png"
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
                                <li><a href="header-1.html">Header 1</a></li>
                                <li><a href="header-2.html">Header 2</a></li>
                                <li><a href="header-3.html">Header 3</a></li>
                                <li><a href="header-4.html">Header 4</a></li>
                                <li><a href="header-5.html">Header 5</a></li>
                                <li><a href="header-6.html">Header 6</a></li>
                                <li><a href="header-7.html">Header 7</a></li>
                                <li><a href="header-8.html">Header 8</a></li>
                            </ul>
                        </li>
                        <li><a href="index.html">Slideshow<FaAngleRight/></a>
                            <ul className="drop-down level3">
                                <li><a href="slider-bootstrap.html">Bootstrap Slider</a></li>
                                <li><a href="banner-1.html">Banner 1</a></li>
                                <li><a href="banner-2.html">Banner 2</a></li>
                                <li><a href="banner-3.html">Banner 3</a></li>
                                <li><a href="banner-video-bg.html">Banner Video BG</a></li>
                            </ul>
                        </li>
                        <li><a href="index.html">Footer<FaAngleRight/></a>
                            <ul className="drop-down level3">
                                <li><a href="footer-1.html">Footer 1</a></li>
                                <li><a href="footer-2.html">Footer 2</a></li>
                                <li><a href="footer-3.html">Footer 3</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="nav-item drop">
                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Pages
                    </a>
                    <ul className="drop-down" aria-labelledby="navbarDropdown">
                        <li><a href="#">About Us 1</a></li>
                        <li><a href="#">About Us 2</a></li>
                        <li><a className="dropdown-item" href="#">Service Page 1</a></li>
                        <li><a href="#">Service Page 2</a></li>
                        <li><a href="#">Team Member</a></li>
                        <li><a href="#">Contact Page</a></li>
                        <li><a href="#">F.A.Q</a></li>
                    </ul>
                </li>
                <li className="nav-item drop">
                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Portfolio
                    </a>
                    <ul className="drop-down" aria-labelledby="navbarDropdown">
                        <li><a href="#">Portfolio 2 Col St 1</a></li>
                        <li><a href="#">Portfolio 2 Col St 2</a></li>
                        <li><a href="#">Portfolio 3 Col St 1</a></li>
                        <li><a href="#">Portfolio 3 Col St 2</a></li>
                        <li><a href="#">Portfolio 4 Col St 1</a></li>
                        <li><a href="#">Portfolio 4 Col St 2</a></li>
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
                                            <li><a href="alert.html">Alert</a></li>
                                            <li><a href="accordion.html">Accordion</a></li>
                                            <li><a href="animated-counter.html">Animated Counter</a></li>
                                            <li><a href="blockquote.html">Block Quote</a></li>
                                            <li><a href="blog-content.html">Blog Content</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <ul>
                                            <li><a href="bootstrap-grid.html">Bootstrap Grid</a></li>
                                            <li><a href="slider-bootstrap.html">Carousel</a></li>
                                            <li><a href="call-to-action.html">Call to Action</a></li>
                                            <li><a href="client.html">Clients</a></li>
                                            <li><a href="divider.html">Divider</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <ul>
                                            <li><a href="dropcap.html">Dropcap</a></li>
                                            <li><a href="error-page.html">Error</a></li>
                                            <li><a href="faq.html">F.A.Q</a></li>
                                            <li><a href="feature-page.html">Feature Box</a></li>
                                            <li><a href="img-content.html">Image Content</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3 col-sm-6">
                                        <ul className="last-child">
                                            <li><a href="piechart.html">Pie Chart</a></li>
                                            <li><a href="pricing-table.html">Pricing Table</a></li>
                                            <li><a href="team.html">Team</a></li>
                                            <li><a href="testimonial.html">Testimonial</a></li>
                                            <li><a href="typography.html">Typography</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="nav-item drop">
                    <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Blog
                    </a>
                    <ul className="drop-down" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Blog Full Width</a></li>
                        <li><a className="dropdown-item" href="#">Blog Left Sidebar</a></li>
                        <li><a className="dropdown-item" href="#">Blog Right Sidebar</a></li>
                        <li><a className="dropdown-item" href="#">Blog Single Page</a></li>
                        <li><a className="dropdown-item" href="#">Single Left Sidebar</a></li>
                        <li><a className="dropdown-item" href="#">Single Right Sidebar</a></li>
                    </ul>
                </li>
                <li className="nav-item megadrop">
                    <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Contact
                    </a>
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
                                                        <a href="#">
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
                                                        <a href="#">
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
                                                        <a href="#">
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
