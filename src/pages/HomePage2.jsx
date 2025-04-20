import React, { useState, useEffect } from 'react'
import '../index.css';
import NavBar from '../components/NavBar';
import Card from '../components/Card';
import Banner from '../components/Banner'
import { Link, useNavigate } from 'react-router-dom';



function HomePage2() {

    const [products,setProducts]=useState([]);
    const navigate=useNavigate();

    useEffect(function(){
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    },[])

    function toPage1(){
      navigate('/')
    }

    //Displays the rest 8 products. 3 in each row

  return (
    <>
        <NavBar />
        <Banner />
        <div className='flex flex-col w-screen'>
          <div className='bg-[#E8E9EB] flex flex-wrap gap-x-[5%] justify-center items-center'>
            {products.slice(12).map(function(prod){
              return <Card key={prod.id} product={prod}/>
            })}
          </div>
          <div className='w-[100%] h-[3rem] flex justify-center items-center gap-x-3 bg-[#E8E9EB] '>
            <button className='bg-[#226CE0] text-[1.5rem] font-bold w-[3rem] h-[2.5rem] text-white' onClick={toPage1}>1</button>
            <button className='bg-[#226CE0] text-[1.5rem] font-bold w-[3rem] h-[2.5rem] text-yellow-300'>2</button>
          </div>
        </div>
    </>
  )
}

export default HomePage2