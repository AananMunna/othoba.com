import 'react'
import { Link } from 'react-router-dom'

const ImageGallery = () => {
  return (
    <div className='container mx-auto p-4 my-5'>
        <div className="flex gap-4 mb-3">
            <Link to='/ProductListingPage' className="w-[50%]">
                <img src="https://images.othoba.com/images/thumbs/0712313_garlic%20web%20banner_480.jpeg" alt="" className='w-full rounded-xl hover:scale-95 cursor-pointer transition-all' />
            </Link>
            <Link to='/ProductListingPage' className="w-[50%]">
                <img src="https://images.othoba.com/images/thumbs/0712312_Website-Block-Mithai%20(1)_480.jpeg" alt="" className='w-full rounded-xl hover:scale-95 cursor-pointer transition-all'/>
            </Link>
        </div>
        <div className="flex gap-3">
            <Link to='ProductListingPage' className="w-[33%]">
                <img src="https://images.othoba.com/images/thumbs/0698951_Web_480.jpeg" alt="" className='w-full rounded-xl hover:scale-95 cursor-pointer transition-all' />
            </Link>
            <Link to='/ProductListingPage' className="w-[33%]">
                <img src="https://images.othoba.com/images/thumbs/0710026_Sara's-Cloud_480.jpeg" alt="" className='w-full rounded-xl hover:scale-95 cursor-pointer transition-all' />
            </Link>
            <Link to='/ProductListingPage' className="w-[33%]">
                <img src="https://images.othoba.com/images/thumbs/0710029_Sara's%20Pizza_480.jpeg" alt="" className='w-full rounded-xl hover:scale-95 cursor-pointer transition-all' />
            </Link>
        </div>
    </div>
  )
}

export default ImageGallery