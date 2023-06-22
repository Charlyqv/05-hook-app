import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
      username: 'kingvirg',
      email: 'charlyqv@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
      const { name, value } = target;
      setFormState({
        ...formState,
        [ name ]: value 
      });
    } 

    useEffect( () => {
      
    });

  return (
    <>
      <h1>Foormulario Simple</h1>
      <hr />

      <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input 
        type="email"
        className="form-control mt-2"
        placeholder="ejemplo@ejemplo.com"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />
    
    </>
  )
}
