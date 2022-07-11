
import './App.css';
import React, { useEffect, useState } from "react";
import Header from './Header';
import Item from './lista';
import url from './lista';
import axios from 'axios';
import BasicStack from './lista';
import Footer from './Footer';

const persjes = JSON.parse(localStorage.getItem('data') || "[]"); 
const id = Math.floor(Math.random()*733);

function App(){  
 
  const [data, setData] = useState(null);
  const [newPers,setNewPers] = useState(false);
  const [pers, setPers] = useState(false);
  const heartblack ="🖤";
  const [saveData,setSaveData] = useState(true);
  const [eliminar,setEliminar] = useState([]);
  const [personajes,setPersonajes] = useState(persjes);
  const [dodi,setDodi] = useState(false);
  
  useEffect(() => {
    const fetchData = async (url, hook) => {
      try{
        const result = await axios.get(url);
        if(newPers != false){{setNewPers(!newPers);}}
        if(pers != false){{setPers(!pers);}}
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
    
     
  },[newPers,pers]);


   
  useEffect(() => {
    console.log("ID recibida otro componente:",dodi.id);
    setData(dodi);
    
  },[dodi]); 
  
  
  const random = () => {
    setNewPers(!newPers);
  }
 
  useEffect(() => {
    
  },[saveData]);
 
  useEffect(() => {
    setData(data);  
  },[data]);

 console.log(data)

 
 
  
  const add = ()=> {
  const pers={
      id: data?.id,
      name: data?.name,
      height: data?.height,
      sprites: data?.sprites.front_default,
      spritesfront_default: data?.sprites.front_default,
  }
  persjes.push(pers);
  localStorage.setItem('data',JSON.stringify(persjes)); 
  console.log(persjes);
  setSaveData(!saveData);
  
 
}
const remover = (id)=>{
  const persjes1 = persjes.filter(pers => pers.id !== id );
  localStorage.setItem('data',JSON.stringify(persjes1)); 
}


return(
  
  <div className=".mainDiv">
    <Header/>
    <div className='Cont1'>
      <div className='Cont2'>
      <h3 className='h2'>Mis Favoritos</h3>
      <div>
        
      </div>
      <div> 
    {
      persjes.map((u,i)=>{ 
        return(
          <div key={i}>
            <BasicStack pers={u} setdodi={setDodi}/>
            
          </div>
        )
      })
    }
  </div>
      </div>
      
      <div className='Cont3' id="Cont3">
       
       <h2 className="nombre"id="h2" color='red'>{data?.name}</h2>
        <img className="img"src={data?.sprites.front_default ? data?.sprites.front_default :  data?.sprites} />
           
        
      </div>
          
          <div className='Cont4'>
          <div className='Borde'>
          <button className='btn1'onClick={random} >Random Hero</button>
        </div>
         <div className="info">
         <h2  color='red'>{data?.name}</h2>
         <p>Exp Base:{data?.base_experience}</p>
         </div>
         <div className='Borde'>
          <button className='btn1'onClick={add} >Add to Favorites</button>
          <button className='btn2' onClick={()=>remover(dodi.id)}>Eliminar</button>
   
          
          
         </div>
      </div>
      
    </div> 
     <Footer/>
  </div>
)
}
   
    
 
  
  




  




export default App;
 