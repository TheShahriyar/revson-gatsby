import React from "react"
import Team1 from "../../images/team/team1.jpg"
import Team2 from "../../images/team/team2.jpg"
import Team3 from "../../images/team/team3.jpg"
import Team4 from "../../images/team/team4.jpg"
import Team5 from "../../images/team/team5.jpg"

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaDribbble,
  FaGooglePlusG,
} from "react-icons/fa"
import ProgressBar from "../ProgressBar"

const TeamStyle1 = () => {
  return (
    <div className="team" id="team">
      <ul className="nav nav-tabs nav-justified" role="tablist" id="myTab">
        <li className="nav-item">
          <a
            className="nav-link active"
            href="#team-1"
            role="tab"
            data-toggle="tab"
          >
            <img src={Team2} alt="" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team-2" role="tab" data-toggle="tab">
            <img src={Team3} alt="" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team-3" role="tab" data-toggle="tab">
            <img src={Team5} alt="" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team-4" role="tab" data-toggle="tab">
            <img src={Team4} alt="" />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#team-5" role="tab" data-toggle="tab">
            <img src={Team1} alt="" />
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="team-1"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <img src={Team2} alt="" />
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="team-details">
                <h4>Barry Allen</h4>
                <span>Senior Web Developer</span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa icon-trophy"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa icon-trophy"></i>Malesuada fames ac
                    ante ipsum
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaDribbble />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGooglePlusG />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="skill-section">
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Web Design</span>
                    <ProgressBar width="75" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Joomla</span>
                    <ProgressBar width="95" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">WordPress</span>
                    <ProgressBar width="60" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Javascript</span>
                    <ProgressBar width="75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="team-2"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <img src={Team3} alt="" />
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="team-details">
                <h4>Jane Doe</h4>
                <span>Senior Web Developer</span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa icon-trophy"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa icon-trophy"></i>Malesuada fames ac
                    ante ipsum
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaDribbble />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGooglePlusG />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
            <div className="skill-section">
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Web Design</span>
                    <ProgressBar width="75" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Joomla</span>
                    <ProgressBar width="95" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">WordPress</span>
                    <ProgressBar width="60" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Javascript</span>
                    <ProgressBar width="75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="team-3"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <img src={Team5} alt="" />
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="team-details">
                <h4>Cisco Ramon</h4>
                <span>Senior Web Developer</span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa icon-trophy"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa icon-trophy"></i>Malesuada fames ac
                    ante ipsum
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaDribbble />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGooglePlusG />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
            <div className="skill-section">
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Web Design</span>
                    <ProgressBar width="75" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Joomla</span>
                    <ProgressBar width="95" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">WordPress</span>
                    <ProgressBar width="60" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Javascript</span>
                    <ProgressBar width="75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="team-4"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <img src={Team4} alt="" />
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="team-details">
                <h4>John Doe</h4>
                <span>Senior Web Developer</span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa icon-trophy"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa icon-trophy"></i>Malesuada fames ac
                    ante ipsum
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaDribbble />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGooglePlusG />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="skill-section">
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Web Design</span>
                    <ProgressBar width="75" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Joomla</span>
                    <ProgressBar width="95" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">WordPress</span>
                    <ProgressBar width="60" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Javascript</span>
                    <ProgressBar width="75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="team-5"
          role="tabpanel"
          aria-labelledby="contact-tab"
        >
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <img src={Team1} alt="" />
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="team-details">
                <h4>John Doe</h4>
                <span>Senior Web Developer</span>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.
                </p>
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li fa icon-trophy"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li fa icon-trophy"></i>Malesuada fames ac
                    ante ipsum
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <a href="#">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaDribbble />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaGooglePlusG />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4">
              <div className="skill-section">
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Web Design</span>
                    <ProgressBar width="75" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Joomla</span>
                    <ProgressBar width="95" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">WordPress</span>
                    <ProgressBar width="60" />
                  </div>
                </div>
                <div className="skill-shortcode">
                  <div className="skill">
                    <span className="skill-name">Javascript</span>
                    <ProgressBar width="75" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamStyle1
