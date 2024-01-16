import Pokecard from './Pokecard';

function Pokedex({ pokemons }){
  return(
    <div>
      <ul>
        { pokemons.map(p => <Pokecard pokemon={p} />) }
        {console.log(pokemons)}
      </ul>
    </div>
  );
}

export { Pokedex };
