import "./App.css";
import PokemonCard from "./components/PokemonCard";
import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar";

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
  pokemonList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ),
};

function App() {
  useEffect(() => {
    alert("Welcome pokemon trainer 👨‍💻 !");
  }, []);

  const [pokemonIndex, setPokemonIndex] = useState(0);
  const pokemon = pokemonList[pokemonIndex];

  const handlePikaEvent = () => {
    pokemonList[pokemonIndex].name === "pikachu"
      ? alert("pika pikachu !!!")
      : null;
  };

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemon} pikaEvent={handlePikaEvent} />
      </div>
      <ul>
        {pokemonList.map((el, index) => (
          <Navbar
            key={el.name}
            index = {index}
            pokemon={el.name}
            setPokemonIndex ={setPokemonIndex}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
