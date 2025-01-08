import { useState, useEffect } from "react";
import '../css/PokemonsCards.css'

function PokemonCards({ score, onChange }) {
  const [pokemonData, setPokemonData] = useState({});
  const [loading, setLoading] = useState(true);
  const [displayedPokemon, setDisplayedPokemon] = useState([]);

  const getRamdomPokemon = (data) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 8);
  }

  useEffect(() => {
    const fetchPokemons = async () => {
      const randomStart = Math.floor(Math.random() * 150);
      const limit = 16;
      const url = `https://pokeapi.co/api/v2/pokemon?offset=${randomStart}&limit=${limit}`;

      try {
        const respose = await fetch(url);
        const data = await respose.json();

        const details = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonDetails = await fetch(pokemon.url).then((res) => res.json());

            return {
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              sprites: pokemonDetails.sprites.front_default,

            }
          })
        )


        setPokemonData(details);
        setDisplayedPokemon(getRamdomPokemon(details));
        setLoading(false);
      } catch (error) {
        console.error();
        setLoading(false);
      }
    }

    fetchPokemons();
  }, []);

  const refreshRandomPokemon = (id) => {
    setDisplayedPokemon(getRamdomPokemon(pokemonData))
    onChange(id)
  };


  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className="game">
      <ul>
        {displayedPokemon.map((pokemon) => (
          <li key={pokemon.id} className="card" onClick={() => refreshRandomPokemon(pokemon.id)} >
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprites} alt={pokemon.name} />
          </li>
        ))}
      </ul>

    </div>
  )
}

export default PokemonCards;
