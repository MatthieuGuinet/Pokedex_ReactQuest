function PokemonCard({pokemon}) {
    const {name, imgSrc} = pokemon[1]
    const igmPokemon = imgSrc ? (<img src={imgSrc} alt={name} />) : (<p>???</p>)
    
    return (
        <figure className = 'card'>
            {igmPokemon}
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default PokemonCard

