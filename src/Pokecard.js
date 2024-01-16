const BASE_IMAGE_URL = 'https://raw.githubusercontent.com/' +
                       'PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard({ pokemon }) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={BASE_IMAGE_URL + String(pokemon.id) + '.png'} />
      <p>Type: {pokemon.type}</p>
      <p>EXP: {pokemon.base_experience}</p>
    </div>
  );
}

export default Pokecard;