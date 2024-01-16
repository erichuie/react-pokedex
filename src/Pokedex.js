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

  const firstHalf = pokemons.splice(0, 4);
  const secondHalf = pokemons.slice();


  return(
    <div>
      <table>
        <tbody>
          <tr>
          { firstHalf.map(function (p){
            <td><Pokecard pokemon={p} /></td>
            })
          }
          </tr>
          <tr>
          { secondHalf.map(function (p){
            <td><Pokecard pokemon={p} /></td>
            })
          }
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export { Pokedex };
