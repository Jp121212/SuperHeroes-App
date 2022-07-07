import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <p>Hola esto es una prueba de cambio :d</p>
  );
}
const axios = require('axios');
id=5
axios.get(`https://superheroapi.com/api/5101234486641683/${id}`).then(resp => {
     
    console.log(resp.data);
});

export default App;
