import React from 'react'

const FeatureStyle8 = ({title, icon, text, style}) => {
    return (
        <div className={`feature-8 ${style}`}>
            <i className={icon}></i>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default FeatureStyle8
