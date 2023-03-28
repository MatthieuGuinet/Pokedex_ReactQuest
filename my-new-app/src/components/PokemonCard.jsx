export default function PokemonCard() {
    const pokemon = pokemonList[1]

    return (
        <figure className = 'card'>
            <img
            src={pokemon.imgSrc}
            alt={pokemon.name}
            />
            <figcaption>{pokemon.name === 'bulbasaur' ? pokemon.name : <p>???</p>}</figcaption>
        </figure>
    )
}

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