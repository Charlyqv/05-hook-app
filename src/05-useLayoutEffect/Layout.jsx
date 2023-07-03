import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from '../03-examples';

export const Layout = () => {

  const {counter, increment, decrement, reset } = useCounter(4);

  const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon-form/${ counter }`);
  
  const { id, name } = !!data && data;

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {

        isLoading
          ? <LoadingQuote />
          : <Quote id={name} name={name} />


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
