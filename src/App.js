import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <p>Hola esto es una prueba de cambio :d</p>
  );
}
const axios = require('axios');

axios.get('https://cors-anywhere.herokuapp.com///superheroapi.com/api/5101234486641683/1').then(resp => {

    console.log(resp.data);
});

export default App;
