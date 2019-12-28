import React from 'react'
import HeaderStyle2 from '../components/Header/HeaderStyle2'
import Banner from '../components/Slideshow/Banner'
import BannerImg from "../images/slideshow/banner-2.jpg"

const Homepage2 = () => {
    return (
        <>
            <HeaderStyle2/>
            <Banner style="text-center" bgImage={BannerImg}>
                <h1>Welcome to <span>Revson</span></h1>
                <p>Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.<br/> Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.</p>
                <a href="#" className="btn btn-primary">Discover More</a>
            </Banner>
        </>
    )
}

export default Homepage2
