import './Pokecard.css';

const BASE_IMAGE_URL = 'https://raw.githubusercontent.com/' +
                       'PokeAPI/sprites/master/sprites/pokemon/';


function Pokecard({ pokemon }) {
  return (
    <div className="Pokecard-card">
      <h1 className="Pokecard-name">{pokemon.name}</h1>
      <img src={BASE_IMAGE_URL + String(pokemon.id) + '.png'} />
      <p className="Pokecard-text">Type: {pokemon.type}</p>
      <p className="Pokecard-text">EXP: {pokemon.base_experience}</p>
    </div>
  );
}

export default Pokecard;