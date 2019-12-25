import React from "react"
import BG from "../../images/bg/bg3.jpg"

const FooterStyle1 = () => {
  return (
    <section
      className="footer-section pad-t80 parallax"
      style={{ backgroundImage: `url(${BG})`, backgroundPosition: "50% 20%" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-title">
              <h3>About Us</h3>
            </div>
            <div className="footer-text">
              <p>
                Curabitur non nulla sit amet nisl tempus convallis quis ac
                lectus.{" "}
                <span className="text-brand-color">Vivamus magna justo</span>,
                lacinia eget consectetur sed, convallis at tellus. Nulla
                porttitor accumsan tincidunt.
              </p>
              <p>
                Vivamus suscipit tortor eget felis porttitor volutpat.
                Vestibulum ante ipsum primis in faucibus orci{" "}
                <span className="text-brand-color">luctus et</span> ultrices
                posuere cubilia Curae.
              </p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="footer-title">
              <h3>Service List</h3>
            </div>
            <div className="footer-list">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>Company Rules
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>Yearly Profit
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>Office Location
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>About Chairman
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-long-arrow-right"></i>Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-title">
              <h3>Our Gallery</h3>
            </div>
            <div className="gallery"></div>
          </div>
          <div className="col-md-3">
            <div className="footer-title">
              <h3>Subscribe</h3>
            </div>
            <p>Vivamus magna justo, lacinia eget consectetur sed.</p>
            <form>
              <div className="form-group footer-subscribe">
                <input
                  type="email"
                  className="form-control"
                  id="Email1"
                  placeholder="Subscribe with us"
                />
                <button type="submit" className="btn btn-default">
                  Join
                </button>
              </div>
            </form>
            <div className="social-top">
              <ul className="top-social">
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-rss"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row copyright">
          <div className="col-md-6">
            <div className="copyright-text">
              <p>
                Revson © All Rights Reserved. Developed by{" "}
                <a href="#">The Shahriyar</a>
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="footer-menu">
              <ul>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterStyle1
