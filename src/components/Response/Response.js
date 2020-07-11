import React from 'react'
import './Response.css'
const Response = (props) => {
    const activeClass = props.responseColor
    return (
        <div className={activeClass}>
            {activeClass}
        </div>
    )
}

export default Response