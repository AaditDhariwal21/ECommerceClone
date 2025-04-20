import React from 'react'
import '../index.css'

function Cart({cartList ,setCartList}) {

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCart = [...cartList];
    updatedCart[index].quantity = parseInt(newQuantity);
    setCartList(updatedCart);
  };

  const handleDelete=(index)=>{
    const updatedCart=[...cartList];
    updatedCart.splice(index,1);
    setCartList(updatedCart);
  }

  const totalPrice = cartList.reduce(
    (sum, product) => sum + product.price * (product.quantity ?? 1),
    0
  );
  

  return (
    <div className=' relative z-20 flex bg-[#E8E9EB]'>

     {/* All Cart Products */}

      <div className='flex flex-col w-[70%] h-full'>
          {cartList.map(function(cartProduct,index){
            const quantity = cartProduct.quantity ?? 1;

             return (
              <>
                <div className='flex w-[100%] mt-10 ml-5 bg-[#FCFAFA] shadow-xl shadow-yellow-100'>
                  <div className='w-[25%]'> 
                    <img src={cartProduct.image} className='w-[100%]'></img>
                  </div>
                  <div className='flex flex-col bg-amber-200 w-[100%] px-[2%] gap-y-[10%]'>
                    <div className=' text-2xl font-bold'>{cartProduct.title}</div>
                    <div className='flex justify-between'>
                      <div className='w-[85%]'> <span className='text-xl italic'>${cartProduct.price*quantity.toFixed(2)}</span> <span className='text-md'>(${cartProduct.price} each)</span> </div>
                      <div className='bg-blue-300 w-[15%] text-center font-semibold'> 
                        Quantity :
                        <select 
                        className='bg-blue-300' 
                        value={quantity}
                        onChange={(e)=>{handleQuantityChange(index,e.target.value)}}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <button className='bg-gray-100 w-[5rem] border border-black-500 cursor-pointer hover:bg-gray-200' onClick={(index)=>handleDelete(index)}>DELETE</button>
                    </div>
                  </div>
                </div>  
              </>
             )
          })}
      </div>

        {/* Price Tally and checkout display */}

      <div className='w-[25%] mt-10 ml-15 bg-green-200 border border-dashed flex flex-col'>

        <div className='flex font-semibold justify-between p-10'>

            <div className='flex flex-col gap-y-5'>
              {cartList.map(function(cartProduct,index){
                return <div> {cartProduct.title} (x{cartProduct.quantity})</div>
              })}
            </div>
            <div className='flex flex-col gap-y-5'>
              {cartList.map(function(cartProduct,index){
                return <div> ${cartProduct.quantity*cartProduct.price} </div>
              })}
            </div>

        </div>
        
        <div className='text-center'>--------------------------------</div>

        <div className='p-10 font-bold text-xl'>
          Final Checkout Price: ${totalPrice.toFixed(2)}
        </div>
        
        <div className='flex justify-center py-5'>
          {cartList.length > 0 ? ( 
              <button className='bg-blue-500 w-[13rem] h-[3rem] rounded-md text-white font-bold text-xl hover:bg-blue-400 cursor-pointer'>
                Proceed to Checkout
              </button>
          ): <button className='bg-blue-500 w-[13rem] h-[3rem] rounded-md text-white font-bold text-xl'> 
              Your Cart is Empty
              </button>
          }
        </div>
          
      </div>

    </div>
  )
}

export default Cart