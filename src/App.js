import { useState } from 'react';
import './App.css';
function App() {
  let [num,setNum]=useState(0)

  const increment=()=>{
    setNum(num++)
  }

  const decrement=()=>{
    setNum(num--)
  }
  return (
    <div id="container">
      <div id="main_container">
       <h1>{num}</h1>
       <div id="btn_collection">
        <button onClick={increment}>ADD</button>
        <button onClick={decrement}>SUB</button> 
       </div>
      </div>
    </div>
  );
}

export default App;
