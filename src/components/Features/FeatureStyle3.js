import React from 'react'

const FeatureStyle3 = ({bgColor, style, icon, title, text}) => {
    return (
        <div class={`feature-3 ${style}`} style={{backgroundColor: `${bgColor}`}}>
            <i class={icon}></i>
            <h4>{title}</h4>
            <p>{text}</p>
        </div>
    )
}

export default FeatureStyle3
