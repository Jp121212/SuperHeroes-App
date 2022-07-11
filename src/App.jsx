
import './App.css';
import React, { useEffect, useState } from "react";
import Header from './Header';
import Listas from './lista';
import Box from './lista';
import axios from 'axios';

const persjes = JSON.parse(localStorage.getItem('data') || "[]"); 
const id = Math.floor(Math.random()*733);

function App(){  
  
  const [data, setData] = useState(null);
  const [newPers,setNewPers] = useState(false);
  const heartblack ="🖤";
  const [saveData,setSaveData] = useState([]);
  
  
  useEffect(() => {
    const fetchData = async (url, hook) => {
      try{
        const result = await axios.get(url);
        if(newPers != false){{setNewPers(!newPers);}}
        hook(result.data);
      } catch (err){
        console.error(err);
      }
    }
    if(!data){
      fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`, setData);
    }
     if(newPers!=false){
      const id = Math.floor(Math.random()*733);
      fetchData(`https://pokeapi.co/api/v2/pokemon/${id}`, setData);
     }
  },[newPers]);
  
  const random = () => {
    setNewPers(!newPers);
  }
  
  const add = ()=> {
  let pers={
      id: data.id,
      name: data.name
  }
  persjes.push(pers);
  localStorage.setItem('data',JSON.stringify(persjes)); 
  setSaveData(persjes);
  console.log(persjes);  
}

const deleteObj =(id)=>{
  const filteredPers = persjes.filter((pers,ind)=>{
    return ind !== id;
  });
  setSaveData(filteredPers);
  console.log(filteredPers,'eliminado');
  localStorage.setItem('data',JSON.stringify(filteredPers));
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
      persjes.map((u,i)=>{
        return <Listas  key={i} pers={u}/>
      })
    }
  </div>
      </div>
      
      <div className='Cont3'>
       <h2 color='red'>{data?.name}</h2>
        <img className="img"src={data?.sprites.front_default} alt='pokemon'/>
        
      </div>
          
          <div className='Cont4'>
          <div className='Borde'>
          <button className='btn1'onClick={random} >Random Hero</button>
        </div>
         <div className="info">
         <h2 color='red'>{data?.name}</h2>
         <p>Exp Base:{data?.base_experience}</p>
         </div>
         <div className='Borde'>
          <button className='btn1'onClick={add} >Add to Favorites</button>
         </div>
      </div>
      
    </div> 
     
  </div>
)
}
   
    
 
  
  




  




export default App;
 