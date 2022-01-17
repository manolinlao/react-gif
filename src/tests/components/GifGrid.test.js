import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

/* 
  Cuando se renderiza por primera vez el componente, la data está vacía
  y el mensaje de loading se ha de mostrar.
  
  Cuando se ha realizado el fetch, el loading ya no se ha de mostrar y 
  tendremos una colección de elementos.
*/

  /*
    Necesitamos mockear la información del resultado del fetch

    Nuestro useFetchçGifs retorna un objeto como este
      {
        data: [],
        loading: true
      }

    Es lo que estaremos mockeando, al  llamar a mockReturnValue lo haremos
    pasándole un objeeto oque es lo que queremos recibir (falseando la respuesta)
  */
describe( 'Pruebas en <GifGrid/>', () => {

  const category = 'One Punch';

  // Hacemos que regrese un array vacío de data y el loading a true
  test( 'debe de mostrarse correctamente', () => {
    
    //mockeo de la respuesta con el estado inicial
    useFetchGifs.mockReturnValue( {
      data: [],
      loading: true
    });

    const wrapper = shallow( <GifGrid category={ category }/>);
    expect( wrapper ).toMatchSnapshot();
  });

  // Prueba recibiendo datos del fetch
  test( 'debe de mostrar items cuando se cargan imágenes de useFetchGifs', () => {
    
    const gifs = [{
      id:'ABC',
      url:'https://localhost/cualquiercosa.jpg',
      title:'cualquier cosa'
    }];

    // mockeo de respuesta con los datos que queremos
    useFetchGifs.mockReturnValue( {
      data: gifs,
      loading: false
    })

    const wrapper = shallow( <GifGrid category={ category }/>);
    expect( wrapper ).toMatchSnapshot();

    // vamos a hacer algunas acepciones más interesantes:
    //    si el loading está en false, hemos de ver que no aparece ya ningún <p>loading</p>
    //    vamos a evaluar que exista <GifGridItem>, tantos como gifs.length tengamos
    expect( wrapper.find('p').exists() ).toBe( false );
    expect( wrapper.find( 'GifGridItem' ).length ).toBe( gifs.length );

  });


});



