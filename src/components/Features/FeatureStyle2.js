import React from 'react'

const FeatureStyle2 = ({title, text, children}) => {
    return (
        <div className="feature-2">
            <div className="media">
                <div className="media-left">
                    <div className="feature-icon">
                        {children}
                    </div>
                </div>
                <div className="media-body">
                    <a href="#">
                        <h3 className="media-heading">{title}</h3>
                    </a>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default FeatureStyle2
