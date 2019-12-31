import React from 'react'
import BgImage from "../../images/bg/parallax5.jpg"

const CallToAction3 = () => {
    return (
        <section class="pad80 parallax" style={{backgroundImage: `url(${BgImage})`, backgroundPosition: "100% 50%"}}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="call-to-action text-center white">
                            <h3>Design. Develope. Dedicate</h3>
                            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>
                            <a href="#" class="btn btn-primary">Buy This Now</a> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CallToAction3
