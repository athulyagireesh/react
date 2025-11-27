import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/home" ;
import Login from "./components/login";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
         <Route path="/" element={<Login></Login>}/>
      </Routes>  
    </BrowserRouter>
  )
}

export default App;