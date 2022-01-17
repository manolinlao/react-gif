// este componente recibe una función que se ha de llamar cuando el input tiene valor
// llamando al submit( handleSubmit )

import React from 'react';
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";


describe( 'Pruebas en <AddCategory/>', () => {

  // Esta función la proporciona Jest
  const setCategories = jest.fn();

  let wrapper = shallow( <AddCategory setCategories={ setCategories }/> );

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow( <AddCategory setCategories={ setCategories }/> );
  });

  // Prueba 1 - El componente se ha de mostrar correctamente
  test( 'debe de mostrarse correctamente', () => {    
    expect( wrapper ).toMatchSnapshot();
  });

  // Prueba 2 - vamos a evaluar cuando la caja de texto cambie
  test( 'debe de cambiar la caja de texto', () => {    
    const input = wrapper.find('input');
    const value = 'hola mundo';
    input.simulate( 'change',{ target:{ value } } );
  });

  // Prueba 3 - un submit del form no ha de llamar a setCategories
  test( 'no debe postear información con submit', () => {
    wrapper.find( 'form').simulate( 'submit' , { preventDefault:() => {} } );
    expect( setCategories ).not.toHaveBeenCalled();
  });

  // Prueba 4 - un submit de un value de length<3 no ha de llamar a setCategories
  test( 'no debe postear información con submit de value.length<3', () => {
    const input = wrapper.find('input');
    input.simulate( 'change',{ target:{ value:'ab' } } );
    wrapper.find( 'form').simulate( 'submit' , { preventDefault:() => {} } );
    expect( setCategories ).not.toHaveBeenCalled();
  });

   // Prueba 4 - un submit de un value de length>2 ha de llamar a setCategories y limpiar la caja de texto
   test( 'debe llamar a setCagegories y limpair la caja de texto', () => {
    let input = wrapper.find( 'input' );
    input.simulate( 'change',{ target:{ value:'abc' } } );
    wrapper.find( 'form').simulate( 'submit' , { preventDefault:() => {} } );
    expect( setCategories ).toHaveBeenCalled();
   
    input = wrapper.find('input');
    expect( input.prop( 'value' ) ).toBe( '' );
  });

});