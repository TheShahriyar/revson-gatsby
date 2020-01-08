import React from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import TestiImage1 from "../images/testimonials/1.jpg"
import TestiImage2 from "../images/testimonials/3.jpg"

const Testimonial = ({textStyle}) => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings} className="testimonial-carousel">
      <div className={`testimonial-item text-center ${textStyle}`}>
        <p>
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at
          sem. Curabitur aliquet quam id dui posuere blandit. Cras
          ultricies ligula sed magna dictum porta. Curabitur arcu erat,
          accumsan id imperdiet et, porttitor at sem. Vivamus magna
          justo, lacinia eget consectetur sed, convallis at tellus.
        </p>
        <img src={TestiImage1} alt="" className="img-circle" />
        <div className="name">Shahriyar Ahmed</div>
        <div className="designation">Web Developer</div>
      </div>
      <div className="testimonial-item text-center white">
        <p>
          Curabitur non nulla sit amet nisl tempus convallis quis ac
          lectus. Proin eget tortor risus. Mauris blandit aliquet elit,
          eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget
          felis porttitor volutpat. Praesent sapien massa, convallis a
          pellentesque nec, egestas non nisi.
        </p>
        <img src={TestiImage2} alt="" className="img-circle" />
        <div className="name">Mariam Akter</div>
        <div className="designation">Web Designer</div>
      </div>
    </Slider>
  )
}

export default Testimonial
