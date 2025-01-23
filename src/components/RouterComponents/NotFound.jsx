import 'react'
import Header from '../layOut/Header'
import Navbar from '../layOut/Navbar'
import Footer from '../layOut/Footer'
import PhonNavbar from '../phonNavbar/PhonNavbar'

const NotFound = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <div className='h-[200px] bg-black my-20'>
            <h1 className='text-5xl text-white text-center pt-[70px]'>Not Found</h1>
        </div>
        <Footer />
        <PhonNavbar />
    </div>
  )
}

export default NotFound