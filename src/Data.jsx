import { useSlotProps } from '@mui/base';
import { clear } from '@testing-library/user-event/dist/clear';
import axios from 'axios';
import  { useEffect, useState } from 'react';
import App from './App';

function Data(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 
  
    useEffect(()=>{
     setLoading(true);
     axios
     .get(url)
     .then((response)=>{
      setData(response.data);
    })
    .catch((err)=>{
      setError(err);
    })
    .finally(()=>{
      setLoading(false);
    });
  },[url]);
  const randompers = () => {
    setLoading(true);
     axios
     .get(url)
     .then((response)=>{
      setData(response.data);
      
    })
    .catch((err)=>{
      setError(err);
    })
    .finally(()=>{
      setLoading(false);
    });
    
   
  
  }

  return{data,loading,error,randompers};

}

export default Data