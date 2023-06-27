import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

  const {counter, increment, decrement, reset } = useCounter(4);

  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon-form/${ counter }`);
  
  // console.log( data );
  
  const { id, name } = !!data && data;


  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {
        isLoading 
          ? (
              <div className="alert alert-info text-center">
                Loading...
              </div>

          )
          : (
              <blockquote className="blockquote text-end">
                <p className="mb-1">{ id }</p>
                <footer className="blockquote-footer"> { name } </footer>
              </blockquote>
          )
      }

      <button className="btn btn-primary" 
      disabled={ isLoading }
      onClick={ () => increment() }>
        Next quote
      </button>
      <button className="btn btn-primary" onClick={ reset }>
        Reset
      </button>
      <button className="btn btn-primary" onClick={ () => decrement() }>
        Previus quote
      </button>


    </>
  )
}
