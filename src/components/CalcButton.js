import React from 'react'

const CalcButton = (props) => {

    const calculation = () => {

        switch (props.name) {
            case "Add":
                props.setNum(props.num + 1);
                break;
            case "Subtract":
                props.setNum(props.num - 1);
                break;
            case "Divide":
                props.setNum(props.num / 2);
                break;
            case "Multiply":
                props.setNum(props.num * 2);
                break;
            case "Square":
                props.setNum(props.num * props.num);
                break;
            default:
                break;
        }

    }


    return (
        <>
            <button onClick={() => calculation() }>{props.name}</button>
        </>
    )
}

export default CalcButton