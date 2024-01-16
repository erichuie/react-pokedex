import './Pokecard.css';

const BASE_IMAGE_URL = 'https://raw.githubusercontent.com/' +
                       'PokeAPI/sprites/master/sprites/pokemon/';

// TODO: Pass in the four (or n) separate props in.
function Pokecard({ pokemon }) {
  return (
    <div className="Pokecard-card">
      <h1 className="Pokecard-name">{pokemon.name}</h1>
      <img src={BASE_IMAGE_URL + String(pokemon.id) + '.png'} />
      <p className="Pokecard-text">Type: {pokemon.type}</p>
      <p className="Pokecard-text">EXP: {pokemon.base_experience}</p>
    </div>
  );
  // TODO: String interpolation instead on image url line
  // TODO: Alt prop in imgs elements please
}

export default Pokecard;