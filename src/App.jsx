
import './App.css';
import React, { useEffect, useState } from "react";
import Data from "./Data";
import Header from './Header';
import Listas from './lista';

const persjes = JSON.parse(localStorage.getItem('data') || "[]"); 
const id = Math.floor(Math.random()*733);

function App(){  
const [stateId,setStateId] = useState(id);
const {data, loading, error} = Data(`https://pokeapi.co/api/v2/pokemon/${id}`);
const [datas, setData] = useState(data);
const heartblack ="🖤";
const [saveData,setSaveData] = useState([]);
const [eliminar,setEliminar] = useState([]);

useEffect(()=>{

},[data]);

useEffect(()=>{
  const id = 1
  setStateId(id);
},[id]);
 

 
  
 

  


  
if (loading) return <h3>Cargando...</h3>;

if(error) console.log(error);



  
const add = ()=> {
  var pers={
      id: data.id,
      name: data.name
  }
  if(data.id === data.id){
   alert("No se puede agregar repetidos")  
  }else{
    persjes.push(pers);
    localStorage.setItem('data',JSON.stringify(persjes));
    setSaveData(persjes);
  }
  console.log(persjes);  
}



const deleteObj =(id)=>{
  
  const filteredPers = persjes.filter( pers => pers.id !== id);
  console.log(filteredPers,'eliminado');
  localStorage.setItem('data',JSON.stringify(filteredPers));
  setSaveData(persjes);
  
}


console.log(data)

return(
  
  <div className=".mainDiv">
    <Header/>
    <div className='Cont1'>
      <div className='Cont2'>
      <h3 className='h2'>Mis Favoritos</h3>
      <div> 
    {
      persjes.map((u)=>{
        return <Listas  pers={u}/>
      })
    }
  </div>
      </div>
      <div className='Cont3'>
        <h1>{data?.name} </h1>
        <img className='img'src={data?.sprites.front_default} />
      </div>
          
          <div className='Cont4'>
          <div className='Borde'>
          <button onClick={setData} >Random</button>
          <button onClick={add}> {heartblack}</button> 
          
        </div>
      </div>
    </div>

  </div>
)
}
   
    
 
  
  




  




export default App;
 