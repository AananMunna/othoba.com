import 'react'
import { Link } from 'react-router-dom'

const Gif = () => {
  return (
    <Link to='/ProductListingPage' className='container mx-auto p-4'>
        <img src="https://images.othoba.com/images/thumbs/0714357_banijjo%20mela%20web%20landing%20banner%20copy.gif" alt="" />
    </Link>
  )
}

export default Gif