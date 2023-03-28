export default function PokemonCard() {
    const pokemon = pokemonList[0]
    const igmPokemon = pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)

    return (
        <figure className = 'card'>
            {igmPokemon}
            <figcaption>{pokemon.name}</figcaption>
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