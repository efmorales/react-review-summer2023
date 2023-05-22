import React, {useState} from 'react';
import './App.css';
import StringCounter from './components/StringCounter';

function App() {
  const [helloWorld, setHelloWorld] = useState("Hello World");

  const setHelloWorldState = () => {
    setHelloWorld("Hello Coders")
  }

  return (
    <div className="App">
      <header className="App-header">

      <h3>React Review</h3>
      </header>

      <div className='App-div'>
        {helloWorld}
        <button onClick={setHelloWorldState}> Hello world change</button>

        <h3> Input change: </h3>
        <StringCounter madeUpProperty={"Hi"}/>

      </div>
    </div>
  );
}

export default App;
