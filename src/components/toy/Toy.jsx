import React from 'react'
import { Link } from 'react-router-dom'

const Toy = () => {
  return (
    <Link to="/toyProductPage">
        <img src="https://images.othoba.com/images/thumbs/0714246_200x200.jpeg" alt="toy" className='border border-3 border-blue-700 rounded-full w-16 fixed bottom-20 right-5 md:left-5 z-10 md:bottom-5' />
    </Link>
  )
}

export default Toy