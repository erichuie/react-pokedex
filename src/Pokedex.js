import Pokecard from './Pokecard';

function Pokedex({ pokemons }){

  // let newTableRow;
  // for(const i = 0; i<pokemons.length; i++){
  //   if(index % 4 === 0) {
  //     newTableRow =
  //     <tr>
  //       <td><Pokecard pokemon={p} /></td>
  //     </tr>;
  //   }
  //   else{

  //   }
  // }

  const firstHalf = pokemons.slice(0, 4);
  const secondHalf = pokemons.slice(4, 8);
  console.log('firstHalf: ',  firstHalf);
  console.log('secondHalf: ', secondHalf);


  return(
    // This is JSX, not html
    // You can return an element or an array of elements.
    <div>
      <table>
        <tbody>
          <tr>
          { firstHalf.map(p => <td><Pokecard pokemon={p} /></td>) }
          </tr>
          <tr>
          { secondHalf.map(p => <td><Pokecard pokemon={p} /></td>) }
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { Pokedex };
