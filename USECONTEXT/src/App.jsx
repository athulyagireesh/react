import {userContext} from "./components/usercontext"
import React from "react"
import Navbar from "./components/navbar"

function App(){
  const name="athulya"
  return(
    <userContext.Provider value={name}>
      <Navbar></Navbar>
    </userContext.Provider>
  )
}

export default App;
