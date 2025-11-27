import React from "react";
import "./App.css"
import { useEffect } from "react";
import { useState } from "react";

function App(){
  const[products,setProducts]=useState([])

  useEffect(()=>{
    async function fetchdata(){
      const res=await fetch("https://dummyjson.com/products");
      const data=await res.json();
      setProducts(data.products)
    }
    fetchdata();
  },[])

  return( 
    <div>
    <div className="nav">
      <p>ECOM</p>

      <div className="searchbar">
        <input type="text" name="" id="search" placeholder="search here.........." />
      </div>

      <button className="btn">LOGIN</button>
    <div></div>
    
    </div>


    <div className="card-contain" id="contain">
      {products.map((element)=>(
    <div className="card" key={element.id}>
    <div className="imagediv">
      <img src={element.images[0]} alt="no image"/>
    </div>
    <div className="text">
      <p>{element.title}</p>
      <button className="cat">{element.category}</button>
      <p className="price">{element.price}</p>
    </div>
    </div>
    ))}
    </div>
    </div>
  )
}

export default App;