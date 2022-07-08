
import './App.css';
import React, { useEffect, useState } from "react";
import Data from "./Data";

var id = Math.floor(Math.random()*733)

function App(){
const {data, loading, error,randompers} = Data(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/5101234486641683/${id}`);
if (loading) return <h3>Cargando...</h3>;

if(error) console.log(error);

console.log(data)
return(
  <div>
    <h4>Super Hero Name: {data?.name} </h4>
    <img
                src={data?.image.url}
                style={{ width: "200px", height: "250px" }}
              /><br></br>
     
    <button onClick={randompers} >Refrescar </button><br></br>
    <button onClick={() => window.location.reload()}>Random</button>
    
  </div>

  
)


}
  




export default App;
 