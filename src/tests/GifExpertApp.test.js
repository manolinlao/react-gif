import React from 'react';
import { shallow } from "enzyme";
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas <GifExpertApp>',()=>{

  // Probamos que matche con el snapshot  
  test('match con el snapshot',()=>{
    const wrapper = shallow( <GifExpertApp/>);
    expect( wrapper ).toMatchSnapshot();   
  });

  // Probamos que matche con el snapshot  
  // y que tenga un GifGrid
  test('match con el snapshot y tenga 1 GifGrid',()=>{
    const wrapper = shallow( <GifExpertApp/>);
    expect( wrapper ).toMatchSnapshot();   
    expect( wrapper.find( 'GifGrid').length ).toBe( 1 );
  });

  
})
