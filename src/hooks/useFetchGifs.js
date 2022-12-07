import React, { useState,useEffect } from 'react'
import { getGifts } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [image, setImage] = useState([])
    const [isLoding, setIsLoding] = useState(true)

    const getImage = async()=>{
        const newImage = await getGifts(category);
        setImage(newImage);
        setIsLoding(false)
    }

    useEffect(() => {
      getImage();
    }, [])
  
    return {
        image,
        isLoding
  }
}
