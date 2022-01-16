import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>',()=>{

  // Probar que el componentes se muestra correctamente
  test('debe de mostrar <GifGridItem/> correctamente',()=>{        
    const wrapper = shallow(<GifGridItem/>);
    //Evaluación
    expect(wrapper).toMatchSnapshot();
  });

  // Probando que si se recibe un title como prop, este se  muestra correctamente
  test( 'debe tener un parrafo con el title', () => {
    const title = 'un titulo';
    const wrapper = shallow(<GifGridItem title={ title }/>);
    const p = wrapper.find( 'p' );
    expect( p.text().trim()).toBe( title );
  });
  
  // Probando que al recibir el prop url, aparezca la imagen de ese url y el alt correcto
  test( 'debe tener un parrafo con el title', () => {
    const title = 'un titulo';
    const url = "https://localhost/algo.jpg";     
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
    const img = wrapper.find( 'img' );
    expect( img.prop( 'src' ) ).toBe( url );
    expect( img.prop( 'alt' ) ).toBe( title );
  });

});
