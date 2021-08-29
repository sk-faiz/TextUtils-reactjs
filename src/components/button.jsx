import React from 'react'

function Button(props) {
    return (
        <div>
            <button className="btn btn-primary mx-2 my-2" onClick={props.func}>{props.name}</button>
        </div>
    )
}

export default Button
