import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App(){
  const[users,setUsers]=useState([])

  useEffect(()=>{
    async function fetchdata(){
      const res=await fetch("https://jsonplaceholder.typicode.com/users");
      const data=await res.json();
      setUsers(data)
    }
    fetchdata();
  },[])

  return(
    <div>
      <h1>
        users list
      </h1>
      <ul>
        {users.map((element)=>(<li>{element.name}</li>))}
      </ul>
    </div>
  )
}

export default App;