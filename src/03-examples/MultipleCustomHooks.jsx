import { useFetch } from "../hooks/useFetch"

export const MultipleCustomHooks = () => {

  const { data, isLoading, hasError } = useFetch('https://pokeapi.co/api/v2/pokemon-form/4');

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

      <button className="btn btn-primary">
        Next quote
      </button>


    </>
  )
}
