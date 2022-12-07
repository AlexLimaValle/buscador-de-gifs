import React, {useState,useEffect } from 'react'
// import { getGifts } from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({category}) => {
    const {image,isLoding} = useFetchGifs(category)
    console.log(isLoding)
  return (
    <>
        <h3>{category}</h3>
        {isLoding ? 
          <h2>Espera....</h2>:
          null
        }
        <div className='card-grid'>
          {image.map((img)=>(
            <GifItem key={img.id} {...img} />
          ))}
        </div>
    </>
  )
}
