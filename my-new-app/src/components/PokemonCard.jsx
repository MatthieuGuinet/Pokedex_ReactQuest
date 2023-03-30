function PokemonCard({pokemon, pikaEvent}) {
    const {name, imgSrc} = pokemon
    const igmPokemon = imgSrc ? (<img src={imgSrc} alt={name} />) : (<p>???</p>)

    pikaEvent();
    
    return (
        <figure className = 'card'>
            {igmPokemon}
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default PokemonCard

