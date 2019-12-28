import React from 'react'
import SlideImg1 from "../../images/slideshow/slider_4.jpg"
import SlideImg2 from "../../images/slideshow/slider_5.jpg"
import SlideImg3 from "../../images/slideshow/slider_2.jpg"
import {FaAngleRight, FaAngleLeft} from "react-icons/fa"

const BootstrapSlider = () => {
    return (
        
        <div id="main-slide" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#main-slide" data-slide-to="0" className="active"></li>
                <li data-target="#main-slide" data-slide-to="1"></li>
                <li data-target="#main-slide" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={SlideImg1} alt="slider"/>
                    <div className="slider-content">
                        <div className="col-md-12 text-center">
                            <h1 className="animated1">
                            <span>Welcome to <strong>Revson</strong></span>
                            </h1>
                            <p className="animated2">Generate a flood of new business with the<br/> power of a digital media platform</p>
                            <a href="#" className="btn btn-primary animated3">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={SlideImg2} alt="slider"/>
                    <div className="slider-content">
                        <div className="col-md-12 text-center">
                            <h1 className="animated1">
                            <span>Welcome to <strong>Revson</strong></span>
                            </h1>
                            <p className="animated2">Generate a flood of new business with the<br/> power of a digital media platform</p>
                            <a href="#" className="btn btn-primary animated3">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={SlideImg3} alt="slider"/>
                    <div className="slider-content">
                        <div className="col-md-12 text-center">
                            <h1 className="animated1">
                            <span>Welcome to <strong>Revson</strong></span>
                            </h1>
                            <p className="animated2">Generate a flood of new business with the<br/> power of a digital media platform</p>
                            <a href="#" className="btn btn-primary animated3">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#main-slide" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next" href="#main-slide" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
        
    )
}

export default BootstrapSlider
