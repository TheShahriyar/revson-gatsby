import React from 'react'

import Team1 from "../../images/team/team1.jpg"
import Team2 from "../../images/team/team2.jpg"
import Team3 from "../../images/team/team3.jpg"
import Team4 from "../../images/team/team4.jpg"

const TeamStyle2 = () => {
    return (
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="team-member-2">
                    <img src={Team1} alt="team member"/>
                    <div className="team-member-details">
                        <h4>Mr. John Doe</h4>
                        <h5>Web Developer</h5>
                        <ul className="team-social">
                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                            <li><a href="#"><i className="icon-googleplus"></i></a></li>
                            <li><a href="#"><i className="icon-tumblr"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="team-member-2">
                    <img src={Team3} alt="team member"/>
                    <div className="team-member-details">
                        <h4>Mr. John Doe</h4>
                        <h5>Web Developer</h5>
                        <ul className="team-social">
                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                            <li><a href="#"><i className="icon-googleplus"></i></a></li>
                            <li><a href="#"><i className="icon-tumblr"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="team-member-2">
                    <img src={Team2} alt="team member"/>
                    <div className="team-member-details">
                        <h4>Mr. John Doe</h4>
                        <h5>Web Developer</h5>
                        <ul className="team-social">
                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                            <li><a href="#"><i className="icon-googleplus"></i></a></li>
                            <li><a href="#"><i className="icon-tumblr"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="team-member-2">
                    <img src={Team4} alt="team member"/>
                    <div className="team-member-details">
                        <h4>Mr. John Doe</h4>
                        <h5>Web Developer</h5>
                        <ul className="team-social">
                            <li><a href="#"><i className="icon-facebook"></i></a></li>
                            <li><a href="#"><i className="icon-twitter"></i></a></li>
                            <li><a href="#"><i className="icon-googleplus"></i></a></li>
                            <li><a href="#"><i className="icon-tumblr"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamStyle2
