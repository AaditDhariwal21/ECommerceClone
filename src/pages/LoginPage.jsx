import React from 'react'


//Dummy Login Page when login is clicked

function LoginPage() {
  return (
    <div className='flex justify-center items-center w-screen h-screen bg-[#f5f5f5]'>
        <div className='flex flex-col items-center w-[40%] h-[50%] bg-red-100 bg-white gap-y-10 rounded-xl shadow-xl'>
            <div className='font-bold text-yellow-300 text-3xl bg-[#226CE0] h-[25%] w-full flex justify-center items-center'>
                Glad to see you back :D
            </div>
            <div className='flex flex-col gap-y-10'>
                <div><input placeholder='Email or Phone Number' className='bg-[#f5f5f5] text-black w-[25rem] h-[2.3rem] text-xl px-2 autofocus'></input></div>
                <div><input placeholder='Password' className='bg-[#f5f5f5] text-black w-[25rem] h-[2.3rem] text-xl px-2'></input></div>
            </div>
            
            <div className='w-full flex justify-center items-center h-[10%]'>
                <button className='bg-[#226CE0] text-white w-[8rem] h-[2rem] font-bold text-[1.2rem] rounded-md cursor-pointer hover:w-[9rem] hover:h-[2.2rem] transition-[width,height] duration-300'>Login</button>
            </div>
        </div>
    </div>
  )
}

export default LoginPage