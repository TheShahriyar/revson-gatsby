import React from 'react'

const FeatureStyle9 = ({icon, title, text, style}) => {
    return (
        <div className={`feature-9 ${style}`}>
            <i className={icon}></i>
            <h4 style={{fontSize: "17px"}}>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default FeatureStyle9
