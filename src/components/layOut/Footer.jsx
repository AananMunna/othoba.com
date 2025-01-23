import 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' p-4 pb-20 pt-16 bg-[#f8f8f8]'>
        <div className='container mx-auto lg:flex items-start justify-around gap-5'>

            <div className='sm:flex justify-between items-start w-full lg:justify-around'>
            <div className=" mb-10">
                <img src="https://www.othoba.com/Themes/Othoba/Content/images/logoOthoba.png" alt="" />
                <p className='text-sm mt-2'>Got Question? Call us 9 AM- 10 PM</p>
                <a href="#"><h4 className='font-bold py-2'>09613-800800</h4></a>
                <p className='text-sm text-[#666666]'>Follow Us</p>
                <div className="flex justify-start items-center gap-3 my-3">
                    <a href="#">
                        <i className="bi bi-facebook bg-[#1b4f9b] text-white px-2 py-1 rounded-full"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-twitter bg-[#00adef] text-white px-2 py-1 rounded-full"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-linkedin bg-[#2c567e] text-white px-2 py-1 rounded-full"></i>
                    </a>
                    <a href="#">
                        <i className="bi bi-youtube bg-[#2c567e] text-white px-2 py-1 rounded-full"></i>
                    </a>
                </div>
                <span className='text-sm'>See our reviews on <i className="bi bi-star-fill text-[#04da8d]"></i> <a href="#" className='font-bold'>Trustpilot</a></span>
            </div>

            <div className=" mb-10">
                <h3 className='font-bold mb-4 uppercase'>company</h3>
                <ul className='text-sm text-[#666666]'>
                    <li className='mt-3 hover:text-blue-600'><Link to="/aboutUs">About Us</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/career">Career</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/contactUs">Contact Us</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/CancellationAndReturns">Privacy Policy</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/OthobaCertificate">Othoba Certified</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/CancellationAndReturns">Terms & Condition</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/NextDayDeliveryTC">Next/Same day delivery TC</Link></li>
                </ul>
            </div>
            </div>

            <div className='sm:flex justify-between items-start w-full lg:justify-around'>
            <div className=" mb-10">
                <h3 className='font-bold mb-4 uppercase'>My Account</h3>
                <ul className='text-sm text-[#666666]'>
                    <li className='mt-3 hover:text-blue-600'><Link to="/OrdersPage">Orders</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/AddressPage">Addresses</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/wishList">My Wishlist</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/OrderHistory">Order History</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/TrackMyOrder">Track My Order</Link></li>
                </ul>
            </div>

            <div className=" mb-10">
                <h3 className='font-bold mb-4 uppercase'>customer service</h3>
                <ul className='text-sm text-[#666666]'>
                    <li className='mt-3 hover:text-blue-600'><Link to="/PaymentMethods">Payment Methods</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/SupportCenter">Support Center</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/HowToShopOnOthoba">How To Shop On Othoba</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/FeaturedRecommendations">Featured Recommendation</Link></li>
                    <li className='mt-3 hover:text-blue-600'><Link to="/CancellationAndReturns">Cancellation, Return & Refund</Link></li>
                </ul>
            </div>
            </div>

        </div>



        <hr  className='mt-5 container mx-auto'/>
        <div className="container mx-auto items-center justify-between mt-4 md:flex">
            <div className="">
                <a href="#"><p className='text-sm text-center text-[#666666]'>Othoba.com Pvt Ltd</p></a>
            </div>
            <div className="md:flex items-center justify-center">
                <p className='text-sm text-center text-[#666666] mt-2'>We are using safe payment for</p>
                <img src="https://www.othoba.com/Themes/Othoba/Content/images/payment.png" alt="" className='w-64 mt-2 mx-auto'/>
            </div>
        </div>
    </div>
  )
}

export default Footer