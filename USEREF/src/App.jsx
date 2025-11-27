import { useMemo , useState , useRef } from "react";


function App(){
  const inputRef=useRef(0);
  const [count,setCount]=useState(0);

  inputRef.current+=1;

  return(
    <div>
      <h1>count:{count}</h1>
      <h1>rendered:{inputRef.current}</h1>
      <button onClick={()=>{setCount(count+1)}}>Submit</button>
    </div>
  )
}




// function App(){
//   const inputRef=useRef(null);
//   function focusInput(){
//     inputRef.current.focus();
//   }

//   return(
//     <div>
//       <input type="text" id="name" ref={inputRef}/>
//       <button onClick={focusInput}>click here</button>
//     </div>
//   )
// }


export default App





