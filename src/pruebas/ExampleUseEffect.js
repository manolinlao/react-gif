import React, { useState } from 'react'
import { useEffect } from 'react/cjs/react.development';

export const ExampleUseEffect = () => {

  const [ count, setCount ] = useState( 0 );

  const handleClick = () =>{
    setCount( (c) => c + 1 );
  }

  /*
    React ejecuta los effects después de cada renderizado, incluyendo el primer rendereizado.
    Le estamos diciendo a React que el componente tiene que hacer algo después de renderizarse.

    Poner useEffect dentro del componente nos permite acceder a la variable de estado count,
    o cualquier otra prop, directamente desde el efecto.

    useEffect se ejecuta después de cada renderizado y después de cada actualización.

    si no ponemos dependencias -> se ejecuta tras cada renderizado
    si ponemos [] -> se ejecuta sólo tras el primer renderizado
    si ponemos [ count ] -> si count==5 y cuando nuestro componente se vuelve a renderizar sigue siendo 5, 
    entonces React comparará el [5] renderizado anterior con el [5] del siguiente renderizado y omitirá el effect.

    useLayoutEffect
    En los casos poco comunes en los que se necesita una ejecución síncrona
    (como en mediciones de la disposición de elementos), 
    podemos usar el Hook useLayoutEffect
  */
  useEffect( ()=> {
    document.title = `you clicked ${ count } times`;
  },[ count ]);

  return (
    <div>
      <h3>ExampleUseEffect</h3>
      <p> you clicked { count } times</p>
      <button onClick={ handleClick }>click me</button>
    </div>
  )
}
