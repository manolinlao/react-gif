/*
  Existe una librería para hacer pruebas con hooks
  React Hooks Testing Library
    npm i --save-dev @testing-library/react-hooks

  Se usa el método renderHook para renderizar un Componente virtual
*/

import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe( 'Pruebas en el hook useFetchGifs', () => {

  test( 'debe de retornar el estado inicial', async() => {
    // esto no se puede hacer
    // const { data, loading } = useFetchGifs( 'One Punch' );

    // usamos renderHook
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Punch' ) );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    console.log( data, loading );
    expect( data ).toEqual( [] );
    expect( loading ).toBe( true );

  });

  // debe retornar un array con las imágenes y el loading a falsae
  // dejaremos que pase el useEffect, para que se dispare el getGifs
  // ¿Cómo se hace para esperar el resultado?
  //    del renderHook obtendremos el waitForNextUpdate, que es una función
  //    que regresa una Promesa que avisa cuando ha habido un cambio en el estado 
  //    de nuestro customhook
  test( 'debe retornar el array de imágenes y el loading a false', async() => {
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'One Puncn' ) );
    await waitForNextUpdate();

    const { data, loading } = result.current;
    
    expect( data.length ).toBe( 10 );
    expect( loading ).toBe( false );
  });

});
