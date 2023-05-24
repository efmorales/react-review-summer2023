import React from 'react'

const StringFunctions = (props) => {
    
    const capitalizeString = (str) => {
        return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    }

    let capitalizedString = capitalizeString(props.inputString)

    const camelCaseFunction = (str) => {
        return str.split(' ').map((word, index) => {
          if (index === 0) {
            return word.toLowerCase();
          } else {
            return word.charAt(0).toUpperCase() + word.slice(1);
          }
        }).join('');
      }

    let camelString = camelCaseFunction(props.inputString)
    
    return (
        <>
            <h3>String Functions:</h3>
            <p>Capitalized string: {capitalizedString}</p>
            <p>Camel Case string: {camelString}</p>
        </>
    )
}

export default StringFunctions