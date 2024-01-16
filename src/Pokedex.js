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
  const secondHalf = pokemons;
  console.log("this is first",firstHalf);
  console.log("this is second",secondHalf);


  return(
    <div>
      <table>
        { pokemons.map(function (p, index){
          if(index % 4 === 0) {

          }
          <td><Pokecard pokemon={p} /></td>
          })
        }
        {console.log(pokemons)}
      </table>
    </div>
  );
}

export { Pokedex };
