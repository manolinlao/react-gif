import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { ExampleUseEffect } from './pruebas/ExampleUseEffect';

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState( [''] );
 
  return (    
    <div>
      <h2>PRUEBAS DE REACT</h2>
      <ExampleUseEffect/>

      <hr/>
      <h2>GifExpertApp</h2>
      <hr/>
            
      <AddCategory setCategories = { setCategories }/>

      <ol>
        {
          categories.map( category => {
            return <GifGrid key={ category } category={ category }/>
          })
        }
      </ol>
    </div>
  )
}
