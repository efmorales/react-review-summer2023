import React from 'react'

const StringCounter = (props) => {
    return (
        <>
            <p>String: {props.inputString}</p>
            <p>String length: {props.inputString.length}</p>
        </>
    )
}

export default StringCounter