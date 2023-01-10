import { useEffect, useState } from 'react'
import axiosInstance from './helpers/axios-instance'

import './App.css'

function App() {

  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokedexList, setPokedexList] = useState([]);

  useEffect(() => {
    
    axiosInstance.get('pokemon')
    .then((res) => {
      console.log(res)
      setPokemonsList(res.data.results)
    })
    .catch(error => console.error(error))
    .finally();


    axiosInstance.get('pokedex')
    .then((res) => {
      console.log(res)
      setPokedexList(res.data.results)
    })
    .catch(error => console.error(error))
    .finally();

  },[]);


  return (
    <div className="App">
      {pokemonsList.map((pokemon, index) => <div key={index}>{pokemon.name}</div>)}
      {pokedexList.map((region, index) => <div key={index}>{region.name}</div>)}
    </div>
  )
}

export default App
