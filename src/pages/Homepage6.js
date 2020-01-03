import React from "react"
import BannerImage from "../images/slideshow/3.jpg"
import corporateImage from "../images/others/corporate-05.jpg"
import Bg6 from "../images/bg/bg6.jpg"
import Bg8 from "../images/bg/bg8.jpg"

import HeaderStyle1 from "../components/Header/HeaderStyle1"
import Banner from "../components/Slideshow/Banner"
import SectionTitle from "../components/SectionTitle/SectionTitle"
import FeatureStyle8 from "../components/Features/FeatureStyle8"
import PortfolioCol4Style1 from "../components/Portfolio/PortfolioCol4Style1"
import ReactMinimalPieChart from "react-minimal-pie-chart"
import TeamStyle1 from "../components/Team/TeamStyle1"
import CallToAction2 from "../components/CallToAction/CallToAction2"
import FeatureStyle3 from "../components/Features/FeatureStyle3"
import Testimonial2 from "../components/Testimonial2"
import FooterStyle1 from "../components/Footer/FooterStyle1"

const Homepage6 = () => {
  return (
    <>
      <HeaderStyle1 />
      <Banner bannerstyle="white" bgImg={BannerImage}>
        <h1>We are Expert</h1>
        <p>
          Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna
          justo, lacinia eget
          <br /> consectetur sed, convallis at tellus. Donec rutrum congue leo
          eget malesuada.
        </p>
        <a href="#" className="btn btn-primary">
          Discover More
        </a>
      </Banner>

      {/* Start Feature Section */}
      <section className="pad-t80 pad-b50">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Our Services" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <FeatureStyle8
                featureStyle="text-center"
                icon="icon-presentation"
                title="HTML Template"
                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
              />
            </div>
            <div className="col-md-3">
              <FeatureStyle8
                featureStyle="text-center active"
                icon="icon-camera"
                title="Joomla Template"
                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
              />
            </div>
            <div className="col-md-3">
              <FeatureStyle8
                featureStyle="text-center"
                icon="icon-target"
                title="WordPress Theme"
                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
              />
            </div>
            <div className="col-md-3">
              <FeatureStyle8
                featureStyle="text-center"
                icon="icon-trophy"
                title="WP Plugin"
                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
              />
            </div>
            <div className="col-md-3">
              <FeatureStyle8
                featureStyle="text-center"
                icon="icon-basket"
                title="cum soluta nobis"
                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
              />
            </div>
            <div className="col-md-3">
              <FeatureStyle8
                featureStyle="text-center"
                icon="icon-layers"
                title="cum soluta nobis"
                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
              />
            </div>
            <div className="col-md-3">
              <FeatureStyle8
                featureStyle="text-center"
                icon="icon-linegraph"
                title="cum soluta nobis"
                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
              />
            </div>
            <div className="col-md-3">
              <FeatureStyle8
                featureStyle="text-center"
                icon="icon-genius"
                title="minus id"
                text="Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.."
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Feature Section */}

      {/* Start image content Section */}
      <section
        className="pad-t80 pad-b50"
        style={{ backgroundColor: "#ed1c24", position: "relative" }}
      >
        <div
          className="left-half width50"
          style={{ backgroundImage: `url(${corporateImage})` }}
        ></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6"></div>
            <div className="col-md-6 col-sm-6">
              <div
                className="text-section white"
                style={{ paddingLeft: "10%" }}
              >
                <h4>
                  Why you will
                  <br />
                  Choose Revson
                </h4>
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Nulla porttitor accumsan tincidunt. Curabitur aliquet
                  quam id dui posuere blandit. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Quisque velit nisi, pretium ut
                  lacinia in, elementum id enim.
                </p>
                <ul className="fa-ul">
                  <li>
                    <i className="fa-li icon-paperclip"></i>Interdum et
                    malesuada fames ac ante
                  </li>
                  <li>
                    <i className="fa-li icon-paperclip"></i>Malesuada fames ac
                    ante ipsum
                  </li>
                  <li>
                    <i className="fa-li icon-paperclip"></i>Nam blandit quam
                    nibh, at fermentum
                  </li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                </p>
                <a href="#" className="btn btn-primary white">
                  Know More
                </a>
              </div>
            </div>
            <div className="col-md-6 col-sm-6"></div>
          </div>
        </div>
      </section>
      {/* End image content Section */}

      {/* Start Portfolio Section*/}
      <section className="pad-t80 pad-b50">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Revson's Portfolio" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <PortfolioCol4Style1 />
            </div>
          </div>
        </div>
      </section>
      {/* End Portfolio Section*/}

      {/* Start Progressive chart Section */}
      <section
        className="pad-t80 pad-b50 parallax"
        style={{ backgroundImage: `url(${Bg6})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Work Progress" style="white" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="progress-chart-feature white">
                <ReactMinimalPieChart
                  background="#f1f1f1"
                  animate={true}
                  animationDuration={1000}
                  animationEasing="ease-out"
                  cx={50}
                  cy={50}
                  data={[
                    {
                      color: "#f1f1f1",
                      title: "One",
                      value: 10,
                    },
                    {
                      color: "#f00",
                      title: "Two",
                      value: 75,
                    },
                  ]}
                  lineWidth={10}
                  radius={30}
                  rounded
                />
                <h4>EDGE</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="progress-chart-feature white">
                <ReactMinimalPieChart
                  background="#f1f1f1"
                  animate={true}
                  animationDuration={1000}
                  animationEasing="ease-out"
                  cx={50}
                  cy={50}
                  data={[
                    {
                      color: "#f1f1f1",
                      title: "One",
                      value: 5,
                    },
                    {
                      color: "#f00",
                      title: "Two",
                      value: 95,
                    },
                  ]}
                  lineWidth={10}
                  radius={30}
                  rounded
                />
                <h4>Chrome</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="progress-chart-feature white">
                <ReactMinimalPieChart
                  background="#f1f1f1"
                  animate={true}
                  animationDuration={1000}
                  animationEasing="ease-out"
                  cx={50}
                  cy={50}
                  data={[
                    {
                      color: "#f1f1f1",
                      title: "One",
                      value: 20,
                    },
                    {
                      color: "#f00",
                      title: "Two",
                      value: 80,
                    },
                  ]}
                  lineWidth={10}
                  radius={30}
                  rounded
                />
                <h4>Safari</h4>
              </div>
            </div>
            <div className="col-md-3">
              <div className="progress-chart-feature white">
                <ReactMinimalPieChart
                  background="#f1f1f1"
                  animate={true}
                  animationDuration={1000}
                  animationEasing="ease-out"
                  cx={50}
                  cy={50}
                  data={[
                    {
                      color: "#f1f1f1",
                      title: "One",
                      value: 10,
                    },
                    {
                      color: "#f00",
                      title: "Two",
                      value: 90,
                    },
                  ]}
                  lineWidth={10}
                  radius={30}
                  rounded
                />
                <h4>Firefox</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Progressive chart Section */}

      {/* Start Team Section*/}
      <section className="pad80">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <SectionTitle title="Team Member" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <TeamStyle1 />
            </div>
          </div>
        </div>
      </section>
      {/* End Team Section*/}

      {/* Start Call to Action Section*/}
      <CallToAction2 bgColor="#222" paddingClass="pad80"></CallToAction2>
      {/* End Call to Action Section*/}

      {/* Start Features Section */}
      <section class="pad-t80 pad-b50">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <SectionTitle title="More Services" />
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <FeatureStyle3
                bgColor="#f2f2f2"
                featureStyle="text-center"
                icon="icon-layers"
                title="labore et dolore"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
              />
            </div>
            <div class="col-md-6">
              <FeatureStyle3
                bgColor="#f2f2f2"
                featureStyle="text-center"
                icon="icon-trophy"
                title="ipsum dolor sit"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
              />
            </div>
            <div class="col-md-6">
              <FeatureStyle3
                bgColor="#f2f2f2"
                featureStyle="text-center"
                icon="icon-genius"
                title="amet quam vehicula"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
              />
            </div>
            <div class="col-md-6">
              <FeatureStyle3
                bgColor="#f2f2f2"
                featureStyle="text-center"
                icon="icon-puzzle"
                title="ligula sed magna"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consectetur adipisicing elit, nisi ut aliquip."
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Features Section */}

      {/* Start Subscription Section*/}
      <section
        className="pad80 parallax"
        style={{
          backgroundImage: `url(${Bg8})`,
          backgroundPosition: "50% 80%",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="subscription-section text-center">
                <h3>Want to Get Service News ?</h3>
                <p>
                  Cras ultricies ligula sed magna dictum porta. Vestibulum ac
                  diam sit amet quam vehicula elementum sed sit amet dui. Sed
                  porttitor lectus nibh. Donec sollicitudin molestie malesuada.
                  Praesent sapien massa, convallis a pellentesque nec, egestas
                  non nisi.
                </p>
                <form>
                  <div className="form-group subscribe-form">
                    <input
                      type="email"
                      className="form-control"
                      id="Email1"
                      placeholder="Subscribe with us"
                    />
                    <button type="submit" className="btn btn-default">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Subscription Section*/}

      {/* Start Testimonial Section*/}
      <Testimonial2 />
      {/* End Testimonial Section*/}

      {/* Start FOoter Section*/}
      <FooterStyle1 />
      {/* End FOoter Section*/}
    </>
  )
}

export default Homepage6
