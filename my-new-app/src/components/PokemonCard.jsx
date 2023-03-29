function PokemonCard({pokemon}) {
    const {name, imgSrc} = pokemon
    const igmPokemon = imgSrc ? (<img src={imgSrc} alt={name} />) : (<p>???</p>)
    
    return (
        <figure className = 'card'>
            {igmPokemon}
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default PokemonCard

