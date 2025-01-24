import 'react'
import logo from'../../assets/logoOthoba.png'
import { Link } from 'react-router-dom'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu'
import MobileSearchBar from '../MobileSearchBar/MobileSearchBar'

const Navbar = () => {
  return (
    <nav className=' bg-gradient-to-r from-cyan-500 to-blue-500'>
    <div className='container mx-auto px-4 py-1 md:p-4 flex justify-between items-center'>
        <div className="flex w-full">
        <div className='flex gap-2'>
            <Link to="/"><img src={logo} alt="logo" className='md:max-w-none'/></Link>
        </div>
        <div className="searchBar hidden rounded-sm md:flex items-center justify-between bg-white p-2 ml-3 md:mx-6 w-[500%]">
        <i className="bi bi-search text-[#4088bd] pl-3"></i>
        <input type="text" placeholder='Search here...' className=' border-none outline-none ml-4 bg-transparent w-full'/>
        </div>
        </div>
        <div className='flex md:gap-3 md:flex'>
        <div className="login flex items-center gap-2 text-sm text-white border-r-2 h-10 pr-5">
            <div className="flex items-center justify-between md:border-r-2 md:pr-2 h-4">
            <i className="bi bi-person text-xl"></i>
                <Link to="/signIn">signIn</Link>
            </div>
                <Link to="/register" className='hidden md:block'>Register</Link>
        </div>
        <div>
            <div className="wishlist text-white pl-3 md:pl-5">
            <Link to="/wishlist" className='flex items-center flex-col'>
            <i className="bi bi-heart md:text-2xl"></i>
            <span className='text-xs'>Wishlist</span>
            </Link>
            </div>
        </div>
        <div>
            <div className="wishlist text-white pl-3 md:pl-5">
            <Link to="/compare" className='flex items-center flex-col'>
            <i className="fa-solid fa-scale-balanced mt-[5px] mb-[3px] md:mb-0 md:mt-0 md:text-2xl"></i>
            <span className='text-xs'>Compare</span>
            </Link>
            </div>
        </div>
        <div className='hidden md:block'>
            <div className="/cart text-white pl-3 md:pl-5">
            <Link to="/cart" className='flex items-center flex-col'>
            <i className="bi bi-cart md:text-2xl"></i>
            <span className='text-xs'>Cart</span>
            </Link>
            </div>
        </div>
        </div>
    </div>
    <div className="md:hidden flex pb-1 justify-between items-center px-5">
    <MobileSearchBar />
    <HamburgerMenu />
    </div>
    </nav>
  )
}

export default Navbar