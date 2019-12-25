import React from 'react'

const SectionTitle = ({style, title}) => {
    return (
        <div className={`section-title ${style ? style: ""}`}>
            <h3>{title}</h3>
        </div>
    )
}

export default SectionTitle
