import React from 'react'

const StringCounter = (props) => {
    return (
        <>
            <div>StringCounter!</div>
            <p>String: {props.inputString}</p>
            <p>String length: {props.inputString.length}</p>
        </>
    )
}

export default StringCounter