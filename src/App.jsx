
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
      fetchData(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/5101234486641683/${id}` , setData);
    }
     if(newPers!=false){
      const id = Math.floor(Math.random()*733);
      fetchData(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/5101234486641683/${id}`, setData);
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
      sprites: data?.image.url,
      intelligence: data?.powerstats.intelligence,
      strength: data?.powerstats.strength,
      speed: data?.powerstats.speed,
      durability: data?.powerstats.durability,
      power: data?.powerstats.power,
      combat: data?.powerstats.combat,
      alignment: data?.biography.alignment,
      publisher: data?.biography.publisher,
      work: data?.work.ocuppation,
      biography: data?.biography["full-name"],
      appearence: data?.appearance.gender,
      race: data?.appearance.race
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
        <img className="img"src={data?.image.url ? data?.image.url :  data?.sprites} />
           
        
      </div>
          
          <div className='Cont4'>
          <div className='Borde'>
          <button className='btn1'onClick={random} >Random Hero</button>
        </div>
         <div className="info">
         <h2  color='red'>{data?.name}</h2> 
          <h4>Biography:</h4>
          <p>Alignment: {data?.biography.alignment}</p>
          <p>Publisher: {data?.biography.publisher}</p>
          <p>Work: {data?.work.ocuppation}</p>
          <p>Full Name: {data?.biography["full-name"]}</p>
          
         <h4>Power Stats:</h4>
          <p>Intelligence: {data?.powerstats.intelligence}</p>
          <p>Strength: {data?.powerstats.strength}</p>
          <p>Speed: {data?.powerstats.speed}</p>
          <p>Durability: {data?.powerstats.durability}</p>
          <p>Power: {data?.powerstats.power}</p>
          <p>Combat: {data?.powerstats.combat}</p>

          <h4>Appearance:</h4>
          <p>Gender: {data?.appearance.gender}</p>
          <p>Race: {data?.appearance.race}</p>
          
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
 