import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { useContext } from "react";

describe('Pruebas en <LoginPage />', () => {
  
  test('debe de mostrar el componente sin el usuario', () => { 
    
    render( 
      <UserContext.Provider value={{ user: null }}>
        <LoginPage/>
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect( preTag.innerHTML ).toBe( 'null' );
    
  });

  test('debe de llamar el setUser cuando se hace click en el boton', () => { 

    const setUserMock = jest.fn();

    render( 
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage/>
      </UserContext.Provider>
    );

    const button = screen.getByRole('button'); //Se puede hacer de esta manera porque solo hay un "button"
    // const button = screen.getByRole('button', {name: 'Establecer usuario' });
    fireEvent.click( button );
    
    expect( setUserMock ).toHaveBeenCalledWith( {"email": "juan@juan.com", "id": 123, "name": "Juan"} );
    
  });
});