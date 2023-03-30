function Navbar({index,pokemon,setPokemonIndex}) {

    const handlePokemonClick = (index) => {
        setPokemonIndex(index);
      };
    
    return (
        <li>
            <button onClick={() => handlePokemonClick(index)}>{pokemon}</button>
        </li>
    )
}

export default Navbar