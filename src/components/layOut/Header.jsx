import 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between py-3 px-4 container mx-auto'>
        <div className='text-xs'>WELCOME TO OTHOBA.COM</div>
        <div className='text-xs'>
            <Link to="/sell" className='hover:text-[#4088bd]'>Sell On Othoba</Link>
        </div>
    </div>
  )
}

export default Header