
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
      fetchData(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/5101234486641683/${id}`, setData);
    }
     if(newPers!=false){
      const id = Math.floor(Math.random()*733);
      fetchData(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/5101234486641683/${id}`, setData);
     }
     
      
     
  },[newPers,pers]);


   
  
  const random = () => {
    setNewPers(!newPers);
  }
  
  const lista = (id) => {
    const pers= persjes.find(pers => pers.id === id )
    console.log(pers);
    setPers(!pers);
  }

 console.log(data)
 
  
  const add = ()=> {
  let pers={
      id: data.id,
      name: data.name
  }
  persjes.push(pers);
  localStorage.setItem('data',JSON.stringify(persjes)); 
  setSaveData(false);
  console.log(persjes);  
}



const remover =(id)=>{ 
  setSaveData(true);
  const pers = persjes.filter( pers => pers.id !== id);
  console.log(pers,'eliminado'); 
  localStorage.removeItem(pers);
  localStorage.setItem('data',JSON.stringify(pers));
 
  alert('Personaje eliminado de la lista');
  setSaveData(false);
  ;

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
            <BasicStack pers={u}/>
            
          </div>
        )
      })
    }
  </div>
      </div>
      
      <div className='Cont3'>
       
       <h2 className="nombre"id="h2" color='red'>{data?.name}</h2>
        <img className="img"src={data?.image.url} alt='Heroe'/>
        
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
          <button className='btn2' onClick={()=>remover(data?.id)}>Eliminar</button>
          
          
         </div>
      </div>
      
    </div> 
     <Footer/>
  </div>
)
}
   
    
 
  
  




  




export default App;
 