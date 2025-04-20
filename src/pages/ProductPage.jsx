import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar';

function ProductPage({addToCart}) {

    const {id}=useParams();
    const [product,setProduct]=useState(null);
    const [loading,setLoading]=useState(true);

    //Fetching Data from FakeStoreAPI.

    useEffect(function(){
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response=>response.json())
            .then(data=>{
                setProduct(data);
                setLoading(false);
            })
    },[id])

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Product not found</div>;

    //Code to store Rating in form of stars

    let starRating="";
    let numberRating=Math.round(product.rating.rate);

    if(numberRating===5){
        starRating="⭐⭐⭐⭐⭐";
    }
    else if(numberRating>=4){
        starRating="⭐⭐⭐⭐";
    }
    else if(numberRating>=3){
        starRating="⭐⭐⭐";
    }
    else if(numberRating>=2){
        starRating="⭐⭐";
    }
    else{
        starRating="⭐";
    }

  return (
    <>
         <NavBar/>
    <div className=' relative z-20 flex bg-[#E8E9EB] w-screen h-[90vh] p-[2%] gap-x-[5%]'>
        <div className='w-[25%]'>
            <img src={product.image} className='w-[100%]'></img>
        </div>
        <div className='w-[75%] h-[100%] flex flex-col gap-[3%]'>
            <div className='text-4xl font-bold underline underline-offset-2'>{product.title}</div>
            <div className='text-2xl italic'>${product.price}</div>
            <div className='flex gap-x-[2%]'>
                <button className='bg-yellow-300 w-[6rem] h-[2rem] text-lg rounded-lg font-semibold cursor-pointer hover:bg-yellow-400'>Buy Now</button>
                <button className='bg-orange-300 w-[9rem] h-[2rem] text-lg rounded-lg font-semibold cursor-pointer hover:bg-orange-400' onClick={()=>{addToCart(product)}}>Add to Cart</button>
            </div>
            <div className='text-lg'>{product.description}</div>
            <div className='text-lg'> <span className='font-bold'>Category:</span> {product.category}</div>
            <div className='text-lg'>
                <span className='font-bold'>Rating:</span> {starRating} ({numberRating}/5)
            </div>
        </div>
    </div>
    </>
   
  )
}

export default ProductPage