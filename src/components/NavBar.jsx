    import React from 'react'
    import '../index.css';
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faMagnifyingGlass, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
    import { faUser } from '@fortawesome/free-solid-svg-icons';
    import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
    import { Link } from 'react-router-dom';
    import Logo from '../assets/KharidLoLogo.png'

    function NavBar() {
    return (
        <div className='relative z-10 flex flex-col'>
            <div className='bg-[#226CE0] w-screen h-[10vh] flex justify-around items-center'>
                <Link  className='w-[7%] h-full' to='/'>
                    <div>
                        <img src={Logo}></img>
                    </div>
                </Link>
                <div className='w-[30%] h-[40%] flex'>
                    <input className= 'bg-[#EDF2F4] w-[100%] h-[100%] placeholder:text-[1.20rem] placeholder:italic p-2 text-lg' placeholder='Search for Products, Brands and more'></input>
                    <button className=' bg-red-200 cursor-pointer w-[10%]'> <FontAwesomeIcon icon={faMagnifyingGlass} className='text-xl'></FontAwesomeIcon></button>
                </div>
                <div className='text-[#EDF2F4] w-[10%] h-[100%] flex  justify-center items-center gap-[50%] text-lg'>
                    <Link to='/login'>
                        <button className='cursor-pointer'><FontAwesomeIcon icon={faUser}></FontAwesomeIcon>Login</button>
                    </Link>
                    <Link to='/cart'>
                        <button className='cursor-pointer'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>Cart</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
    }

    export default NavBar