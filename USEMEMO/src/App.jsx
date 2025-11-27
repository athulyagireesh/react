import {useMemo , useState } from "react"

function App(){
  const[Num,setNum]=useState(6);
  const[Show,setShow]=useState(false);
  const expensive=useMemo(()=>{
    console.log("function re-rendered")
    return (Num*2);
  },[Num])

  return(
    <>
    <input type="text" value={Num} onChange={(e)=>{
      setNum(Number(e.target.value))
    }} />
    <p>double is{expensive}</p>

    <button onClick={()=>{setShow(!Show)}}>toggle</button>

    <p>SHOW IS {Show?"ON":"OFF"}</p>
    </>
  )
}

export default App