
import './App.css';
import React, { useEffect, useState } from "react";
import Data from "./Data";
import { BrowserRouter as Router } from "react-router-dom";
import { Button,Avatar } from '@mui/material';
import { width } from '@mui/system';

var persjes = JSON.parse(localStorage.getItem('data') || "[]");
var id = Math.floor(Math.random()*733)
function App(){
const {data, loading, error,randompers} = Data(`https://pokeapi.co/api/v2/pokemon/${id}`);
const heartblack ="🖤";
const [saveData,setSaveData] = useState(false);
const [saveData2,setSaveData2] = useState(false);

  
if (loading) return <h3>Cargando...</h3>;

if(error) console.log(error);

const add = ()=> {
  var pers={
      id: data.id,
      name: data.name
  }
  persjes.push(pers);
  localStorage.setItem('data',JSON.stringify(persjes));
  setSaveData(true);
  console.log(persjes);
}
 

function deleteObj (id){
  
  var filteredPers = persjes.filter(pers => pers.id !== id);
  localStorage.setItem('data',JSON.stringify(filteredPers));
  setSaveData2(true);
  window.location.reload();
  console.log(filteredPers);
  
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
              <span>🦸‍♂️</span>{pers.name}<Button onClick={() => deleteObj(pers.id)}
              startIcon={<Avatar src={'https://cdn.icon-icons.com/icons2/692/PNG/512/seo-social-web-network-internet_262_icon-icons.com_61518.png'}/>}></Button>
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
 