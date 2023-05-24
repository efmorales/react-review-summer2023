import React, { useState } from 'react';
import './App.css';
import StringCounter from './components/StringCounter';
import StringFunctions from './components/StringFunctions';
import CalcButton from './components/CalcButton';

// make a new component called StringFunctions
// StringFunction component should have to functions
// 1) Capitalize the inputString state
//     -- Capitalize the first letter of each word
//    coffee is best black -> Coffee Is Best Black
// 2) camelCase the inputString state
//     -- lowercase the first letter of the first word, Capitalize the rest
//    Coffee is best black -> coffee Is Best Black
//   
// --for both assume words are split with a single space - " "
//
// make 2 button elements here in App.js will invoke those functions

function App() {
  const [helloWorld, setHelloWorld] = useState("Hello World");
  const [inputString, setInputString] = useState("default string");
  const [num, setNum] = useState(0);

  const setHelloWorldState = () => {
    setHelloWorld("Hello Coders")
  }

  const inputHandler = (event) => {
    setInputString(event.target.value);
  }


  return (
    <div className="App">
      <header className="App-header">

        <h3>React Review</h3>
      </header>

      <div className='App-div'>
        {helloWorld}
        <button onClick={setHelloWorldState}> Hello world change</button>

        <input type='input' placeholder='Enter a string' onChange={inputHandler}></input>

        <h3> Input string: {inputString} </h3>

        <StringCounter inputString={inputString} />
        <StringFunctions inputString={inputString} />

        <h3> Calculator </h3>
        <h4>Number: {num}</h4>

        < CalcButton 
        name={"Add"}
        num={num}
        setNum={setNum} />

        < CalcButton 
        name={"Subtract"}
        num={num}
        setNum={setNum} />

        < CalcButton 
        name={"Divide"}
        num={num}
        setNum={setNum} />

        < CalcButton 
        name={"Multiply"}
        num={num}
        setNum={setNum} />

        < CalcButton 
        name={"Square"}
        num={num}
        setNum={setNum} />

      </div>
    </div>
  );
}

export default App;
