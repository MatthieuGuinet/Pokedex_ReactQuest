import './App.css'
import PokemonCard from './components/PokemonCard'
import PropTypes from "prop-types";


const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

PokemonCard.propTypes = {
  pokemonList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  })).isRequired,
}


function App() {
  return <PokemonCard pokemon={pokemonList}/>
}

export default App
