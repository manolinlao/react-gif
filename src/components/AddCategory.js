import React, { useState } from 'react'

export const AddCategory = ( { setCategories } ) => {

  const [inputValue,setInputValue] = useState('');

  const handleAdd = () => {
    if(inputValue.trim().length>2){
      setCategories( cats => [...cats,inputValue] );
      setInputValue('');
    }   
  }

  const handleInputChange = ( e ) => {    
    setInputValue( e.target.value );
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    if(inputValue.trim().length>2){
      setCategories( cats => [...cats,inputValue] );
      setInputValue('');
    }    
  }
 
  return (
    <>      
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          value={ inputValue }
          onChange={ handleInputChange }
        />
      </form>
      <button onClick={ handleAdd }>agrega</button>
    </>
  )
}
