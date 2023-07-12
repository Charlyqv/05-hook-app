import { render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';

describe('Pruebas en <MultipleCustomHooks />', () => { 
  test('debe de mostrar el componente por defecto', () => { 

    render( <MultipleCustomHooks /> );

    expect( screen.getAllByText('Loading...') );
    expect( screen.getAllByText('BreakingBad Quotes') );

    const nextButton = screen.getByRole('button',{ name: 'Next quote'});
    expect( nextButton.disabled).toBeTruthy();
    // screen.debug();
    
   });
 });