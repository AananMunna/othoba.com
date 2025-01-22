import 'react'
import Header from '../layOut/Header'
import Navbar from '../layOut/Navbar'
import Footer from '../layOut/Footer'

const Register = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <div className='h-[200px] bg-purple-700 my-20'>
            <h1 className='text-5xl text-white text-center pt-[70px]'>Register page</h1>
        </div>
        <Footer />
    </div>
  )
}

export default Register