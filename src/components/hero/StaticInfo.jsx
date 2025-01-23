import 'react'
import { Link } from 'react-router-dom'

const StaticInfo = () => {
  return (
    <div className='container p-4 mx-auto'>
        <div className=" h-full flex items-center justify-center lg:justify-between lg:gap-5 overflow-x-scroll scroll-smooth transition-all [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border p-3">

            <Link to='/CancellationAndReturns' className="card text-center md:text-start md:flex items-center gap-3">
            <div>
            <i className="bi bi-truck text-4xl"></i>
            </div>
                <div>
                <h3 className=' text-sm lg:text-md font-semibold'>Cancellation & Returns</h3>
                <span className='text-xs lg:text-sm'>if products not matched</span>
                </div>
            </Link>

            <Link to='/CancellationAndReturns' className="card hidden text-center md:text-start md:flex items-center gap-3">
            <div>
            <i className="bi bi-duffle text-4xl"></i>
            </div>
                <div>
                <h3 className=' text-sm lg:text-md font-semibold'>Privacy Policy</h3>
                <span className='text-xs lg:text-sm'>Check before dealing</span>
                </div>
            </Link>

            <Link to='/CancellationAndReturns' className="card hidden text-center md:text-start md:flex items-center gap-3">
            <div>
            <i className="bi bi-cash-coin text-4xl"></i>
            </div>
                <div>
                <h3 className=' text-sm lg:text-md font-semibold'>EMI Policy</h3>
                <span className='text-xs lg:text-sm'>We provide 0% EMI facilities*</span>
                </div>
            </Link>

            <Link to='/CancellationAndReturns' className="card hidden text-center md:text-start md:flex items-center gap-3">
            <div>
            <i className="bi bi-telephone-forward text-4xl"></i>
            </div>
                <div>
                <h3 className=' text-sm lg:text-md font-semibold'>Customer Support</h3>
                <span className='text-xs lg:text-sm'>Call us at 0961800800</span>
                </div>
            </Link>
            
        </div>
    </div>
  )
}

export default StaticInfo