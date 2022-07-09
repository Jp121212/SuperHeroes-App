
import './App.css';
import React, { useEffect, useState } from "react";
import Data from "./Data";
import { BrowserRouter as Router } from "react-router-dom";
import Headers from "./header"
import { Button } from '@mui/material';


var id = Math.floor(Math.random()*733)
var persjes = JSON.parse(localStorage.getItem('data') || "[]");

function App(){
const {data, loading, error,randompers} = Data(`https://pokeapi.co/api/v2/pokemon/${id}`);
const heartblack ="🖤";

  
if (loading) return <h3>Cargando...</h3>;

if(error) console.log(error);


function add (){
   
    localStorage.setItem('data',JSON.stringify(persjes));
    var pers={
        id: data.id,
        name: data.name
    }
    persjes.push(pers);
    console.log(persjes);
}


  
function delete11(){  
}

console.log(data)

return(
  
  <div style={{margin: "20px"}}>
    <h1>{data?.name} </h1>
    
    <button onClick={() => window.location.reload()}>Random</button>
    <button onClick={add}> {heartblack}</button>   
    
  <div>
   
    <table>
      <thead>
        <tr>
          <th>My favorites Heroes</th>
        </tr>
      </thead>
      <tbody>
         {
          persjes.map(pers =>(
          <tr key={pers.name}>
              <td>
              <span>🦸‍♂️</span>{pers.name}<Button onClick={delete11}>eliminar</Button>
              </td>
          </tr> 
          ))
          }
      </tbody>
    </table>
    </div>
   
    
  </div> 

 
  
  
)


}
  




export default App;
 