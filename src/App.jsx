import { HashRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage';
import HomePage2 from './pages/HomePage2';
import { useEffect, useState } from 'react';

function App() {

  const [cartList,setCartList]=useState(function(){
  const storedCart=localStorage.getItem("cart");
    if(storedCart){
      return JSON.parse(storedCart);
    }
    else{
      return []
    }
  });


  useEffect(function(){
    localStorage.setItem("cart",JSON.stringify(cartList));
  },[cartList])

  function addToCart(product){

    if (!cartList.some(item => item.id === product.id)) {
      const updatedCart = [...cartList, { ...product, quantity: 1 }];
      setCartList(updatedCart);
      console.log(updatedCart);
    }
  }

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/homepage2' element={<HomePage2/>}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/cart" element={
            <>
              <NavBar/>
              <Cart cartList={cartList} setCartList={setCartList}/>
            </>
          } 
          />
          <Route path='/products/:id' element={<ProductPage addToCart={addToCart}/>}/>
        </Routes>
      </HashRouter>
 
    </>
  )
}

export default App
