import React from 'react'
import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target})=>{
        setInputValue(target.value);
    }

    const onInputSubmit = (e)=>{
      e.preventDefault()
      if(inputValue.trim().length <= 1) return;
      onNewCategory(inputValue.trim())
      setInputValue('');
    }
  return (

    <form onSubmit={(event)=>onInputSubmit(event)}>
      <input
          type="text"
          placeholder='Buscar gifs'
          value={inputValue}
          onChange={onInputChange}
      />
    </form>
  )
}
