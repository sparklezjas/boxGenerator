import './App.css';
import React, { useState } from 'react';
import ColorBox from './components/ColorBox';
import Form from './components/Form';

function App() {
  const [ colorBoxArray, setColorBoxArray ] = useState([])

  return (
    <div className="App">
      <Form colorBoxArray={ colorBoxArray } setColorBoxArray={setColorBoxArray}/>
      <ColorBox colorBoxArray= { colorBoxArray }/>
      
    </div>
  );
}

export default App;