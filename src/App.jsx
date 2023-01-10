import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {

  const [pokemonsList, setPokemonsList] = useState([]);

  useEffect(() => {
    
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((res) => {
      console.log(res)
      setPokemonsList(res.data.results)
    })
    .catch(error => console.error(error))
    .finally();

  },[]);


  return (
    <div className="App">
      {pokemonsList.map((pokemon, index) => <div key={index}>{pokemon.name}</div>)}
    </div>
  )
}

export default App
