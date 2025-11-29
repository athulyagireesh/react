import React from "react";
import {increment, decrement, reset} from "./components/counterslice";
import { useSelector, useDispatch} from "react-redux";

function App(){
  const count=useSelector((state)=>state.counter.count);

  const disp=useDispatch();


  return(
    <div>
      <h1>counter</h1>
      <p>count:{count}</p>
      <button onClick={()=>{disp(increment())}}>increment</button>
      <button onClick={()=>{disp(decrement())}}>decrement</button>
      <button onClick={()=>{disp(reset())}}>reset</button>
    </div>
  )
}

export default App;