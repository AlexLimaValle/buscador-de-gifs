import React from 'react'
import { useState } from 'react';
import {AddCategory,GifGrid} from './components';


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Dragon Ball']);
    const onAddCategory = (categorys)=>{
        console.log(categorys);
        if(categories.includes(categorys)) return;
        setCategories([categorys,...categories]);
    }
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onNewCategory={event => onAddCategory(event)}/>
        <button onClick={onAddCategory}>Agregar</button>
            {categories.map((category) => (
                    <GifGrid 
                    key={category} 
                    category={category}
                    />
                ))
            }
    </>

  )
}
