import './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types";
import {useState} from "react";
import ButtonPokemonPrevious from './components/ButtonPokemonPrevious';
import ButtonPokemonNext from './components/ButtonPokemonNext';
import { useEffect } from "react";

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

PokemonCard.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  })),
}

function App() {

  useEffect(
    () => {
      alert("Welcome pokemon trainer 👨‍💻 !");
    },
    []
  );

  const [pokemonIndex, setPokemonIndex] = useState(0)
  const pokemon = pokemonList[pokemonIndex]

  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  
  const handlePikaEvent = () => {
    pokemonList[pokemonIndex].name === 'pikachu' ? alert("pika pikachu !!!") : null
  }

  return (
    <>
    <div>
    <PokemonCard 
    pokemon = {pokemon}
    pikaEvent = {handlePikaEvent}
    />
    </div>
    <nav className="navbar">
      {pokemonIndex > 0 ? 
      <ButtonPokemonPrevious
      onClickP = {handleClickPrevious}
      /> :
      <div></div>}
      {pokemonIndex < pokemonList.length -1 ? 
      <ButtonPokemonNext
      onClickN ={handleClickNext}
      /> :
      <div></div>}
    </nav>
    </>
    
  )
}

export default App
