//Home Page Product display cards

import React from 'react'
import { useNavigate } from 'react-router-dom'

function Card( {product} ) {
  const navigate=useNavigate();

  function handleClick(){
    navigate(`/products/${product.id}`);
  }

  return (
    <div onClick={handleClick} className='flex flex-col justify-center items-center w-[25%] h-[25rem] rounded-lg bg-[#FCFAFA] my-10 cursor-pointer'>
      <div className='flex justify-center items-center h-[50%] w-[100%] mb-10'>
        <img src={product.image} className='h-full'></img>
      </div>
      <div className='text-lg font-bold px-5'>{product.title}</div>
      <div className='mt-5 text-[1.1rem]'>${product.price}</div>
    </div>
  )
}

export default Card