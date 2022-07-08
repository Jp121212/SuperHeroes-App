
import './App.css';
import React, { useEffect, useState } from "react";
import Data from "./Data";
import { border, color } from '@mui/system';

var id = Math.floor(Math.random()*733)

function App(){
const {data, loading, error,randompers} = Data(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/5101234486641683/${id}`);
if (loading) return <h3>Cargando...</h3>;

if(error) console.log(error);

console.log(data)
return(
  <div style={{margin: "20px"}}>
    <h1>{data?.name} </h1>
    <h2>Alignment: {data?.biography.alignment}</h2>
    <img
                src={data?.image.url}
                style={{ width: "200px", height: "250px" }}
              /><br></br>
    <h5>Occupation: {data?.work.occupation}</h5>
    <h5>Intelligence: {data?.powerstats.intelligence}</h5>
    <h5>Strength: {data?.powerstats.strength}</h5>
    <h5>Speed: {data?.powerstats.speed}</h5>
    <h5>Durability: {data?.powerstats.durability}</h5>
    <h5>Power: {data?.powerstats.power}</h5>
    <button onClick={randompers} >Refrescar </button><br></br>
    <button onClick={() => window.location.reload()}>Random</button>
    
  </div>

  
)


}
  




export default App;
 