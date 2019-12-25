import React from 'react'
import HeaderStyle1 from '../components/Header/HeaderStyle1'
import SectionTitle from '../components/SectionTitle/SectionTitle'
import FeatureStyle1 from '../components/Features/FeatureStyle1'
import img2 from "../images/others/img-2.jpg"
import Human from "../images/others/02.png"
import BG6 from "../images/bg/bg6.jpg"
import {FaBuffer,FaRegGem,FaTrophy,FaPaperPlane,FaPaperclip} from "react-icons/fa"
import FeatureStyle2 from '../components/Features/FeatureStyle2'
import CallToAction2 from '../components/CallToAction/CallToAction2'
import Portfolio from '../components/Portfolio/Portfolio'
import CountUp from 'react-countup'

const Homepage1 = () => {
    return (
        <>
            <HeaderStyle1/>


            {/* Start Welcome Section */}
            <section className="pad-t80 pad-b50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <SectionTitle title="Welcome to Revson"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <FeatureStyle1 title1="Story" title2="History" number="01" text="Vivamus magna justo, lacinia eget consect sed, convallis at tellus. Lorem ipsum dolor consectetur adipiscing elit." />
                        </div>
                        <div className="col-md-4">
                            <FeatureStyle1 title1="Goal" title2="Mission" number="02" text="Vivamus magna justo, lacinia eget consect sed, convallis at tellus. Lorem ipsum dolor consectetur adipiscing elit." />
                        </div>
                        <div className="col-md-4">
                            <FeatureStyle1 title1="Target" title2="Success" number="03" text="Vivamus magna justo, lacinia eget consect sed, convallis at tellus. Lorem ipsum dolor consectetur adipiscing elit." />
                        </div>
                    </div>
                </div>
            </section>
            {/* End Welcome Section */}


            {/* Start image content Service Section*/}
            <section className="pad-t80 pad-b50" style={{backgroundColor: "#f9f9f9", position: "relative"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4"></div>
                        <div className="col-md-8 col-sm-8">
                            <h3 style={{fontSize: '30px', lineHeight:'40px', margin: '0 0 10px', textTransform:'uppercase'}}>WE ARE Always HERE TO <br/>PROVIDE Service</h3>
                            <p>Lorem ipsum dolor sit consectetur adipiscing elit. Quisque velit nisi pretium ut lacinia in, elementum id enim.</p>
                            <div className="feature-list" style={{marginTop: '40px'}}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <FeatureStyle2 title="DESIGNED TO BE AMAZING" text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu.">
                                            <i class="icon-puzzle"></i>
                                        </FeatureStyle2>
                                    </div>
                                    <div className="col-md-6">
                                        <FeatureStyle2 title="Industrial Services" text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu.">
                                            <i class="icon-mobile"></i>
                                        </FeatureStyle2>
                                    </div>
                                    <div className="col-md-6">
                                        <FeatureStyle2 title="Startup Business Planning" text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu.">
                                            <i class="icon-layers"></i>
                                        </FeatureStyle2>
                                    </div>
                                    <div className="col-md-6">
                                        <FeatureStyle2 title="Make company top" text="Nulla facilisi curabitur iaculisacc aug, ex ea commodo consequat nec finibus mauris pretium eu.">
                                            <i class="icon-trophy"></i>
                                        </FeatureStyle2>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="left-half width33" style={{backgroundImage: `url(${img2})`, backgroundPosition:'-300px center'}}></div>
            </section>
            {/* End image content Service Section*/}


            {/* Start Why Choose Us Section Section*/}
            <section className="pad-t80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <SectionTitle style="left" title="Why Choose Us"/>
                            <FeatureStyle2 title="We are the best company in town" text="Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque">
                                <i class="icon-paperclip"></i>
                            </FeatureStyle2>
                            <FeatureStyle2 title="We always give priority to customer" text="Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque">
                                <i class="icon-paperclip"></i>
                            </FeatureStyle2>
                            <FeatureStyle2 title="No one can ahead of us" text="Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae Donec velit neque">
                                <i class="icon-paperclip"></i>
                            </FeatureStyle2>
                        </div>
                        <div className="col-md-5">
                            <div className="template-image text-center">
                                <img src={Human} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Why Choose Us Section Section*/}


            {/* Start Call to Action Section*/}
            <CallToAction2></CallToAction2>
            {/* End Call to Action Section*/}


            {/* Start Portfolio Section*/}
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Portfolio/>
                    </div>
                </div>
            </div>
            {/* End Portfolio Section*/}


            {/* Start Counter Section*/}
            <section className="pad-t80 pad-b50 parallax" style={{backgroundImage: `url(${BG6})`, backgroundPosition: "50% 40px"}}>
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-3 col-sm-6 ">
                            <div className="animated-counter text-center white">
                                <div className="animated-number">
                                    <CountUp end={125} />
                                </div>
                                <h4>Completed Projects</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="animated-counter text-center white">
                                <div className="animated-number">
                                    <CountUp end={8285} />
                                </div>
                                <h4>Coffee Ordered</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="animated-counter text-center white">
                                <div className="animated-number">
                                    <CountUp end={2245} />
                                </div>
                                <h4>Problem Solved</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="animated-counter text-center white">
                                <div className="animated-number">
                                    <CountUp end={543} />
                                </div>
                                <h4>Happy Clients</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Counter Section*/}
        </>
    )
}

export default Homepage1
