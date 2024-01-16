function Pokedex({ pokemons }){
  // for(const pokemon of pokemons){
  //   return(
  //     <Pokecard pokemon={pokemon} />
  //   );
  // }

  return(
    <div>
      <ul>
        { pokemons.map(p => <li><Pokecard pokemon={p} /></li>) }
      </ul>
    </div>
  );
}

export { Pokedex };
