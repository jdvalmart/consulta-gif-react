import React, { useState } from 'react'
import {AddCategory, GifGrid} from './components'



const GitExpertApp = () => {

  const [categories, setCategories] = useState([ 'One punch'])

  const onAddCategory = (newCategory) => {

     if (categories.includes(newCategory)) return 

     setCategories([newCategory,...categories])
      }
  
      
  return (
   <> 
        <h1>Consulta tus gifs</h1>

        <AddCategory onNewCategory={onAddCategory} />
        {
            categories.map((category) =>(
            <GifGrid key={category} category={category}/>
            ))
        }
   </>
  )
}

export default  GitExpertApp


