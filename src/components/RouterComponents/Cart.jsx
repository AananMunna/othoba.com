import 'react'
import Header from '../layOut/Header'
import Navbar from '../layOut/Navbar'
import Footer from '../layOut/Footer'

const Cart = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <div className='h-[200px] bg-red-300 my-20'>
            <h1 className='text-5xl text-white text-center pt-[70px]'>Cart</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Cart