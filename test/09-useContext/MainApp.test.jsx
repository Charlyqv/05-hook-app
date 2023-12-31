import { render, screen } from '@testing-library/react'
import { MainApp } from '../../src/09-useContext/MainApp'
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en el <MainApp />', () => { 

  test('debe de mostar el HomePage', () => { 

    render( 
      <MemoryRouter>
        <MainApp />    
      </MemoryRouter> 
    );
    
    expect( screen.getByText('HomePage') ).toBeTruthy();
  });

  test('debe de mostar el LoginPage', () => { 

    render( 
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />    
      </MemoryRouter> 
    );
    
    expect( screen.getByText('LoginPage') ).toBeTruthy();
  });
  
  test('debe de mostar el AboutPage', () => { 

    render( 
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />    
      </MemoryRouter> 
    );
    
    expect( screen.getByText('AboutPage') ).toBeTruthy();
  });
});