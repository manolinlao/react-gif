import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
  console.log('useFetchGifs: category = ' + category);
  const [ state, setState ] = useState(
    {
      data: [],
      loading: true
    }
  );

  useEffect( () => {
    console.log("USEEFFECT EN USEFETCHGIFS");
    getGifs( category )
      .then( imgs => {
        setState(
          {
            data: imgs,
            loading: false
          }
        )
      })
  }, [ category ]);

  console.log('returning state');
  return state; // { data: [], loading: true }
}