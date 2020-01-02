import React from 'react'

const Banner = ({style, bgImg, children}) => {
    return (
        
        <section className="parallax" style={{backgroundImage: `url(${bgImg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className={`banner ${style}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
