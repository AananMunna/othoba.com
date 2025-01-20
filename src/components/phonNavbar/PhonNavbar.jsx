import 'react'

const PhonNavbar = () => {
  return (
    <div className='fixed bottom-0 left-0 right-0 text-center p-2 bg-white flex items-center justify-around text-[#666666] border-t z-50 md:hidden'>
        <a href='#' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 rounded-md hover:text-white'>
        <i className="bi bi-house text-2xl"></i>
        <p className='text-xs uppercase'>Account</p>
        </a>
        <a href='#' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 rounded-md hover:text-white'>
        <i className="bi bi-list-task text-2xl"></i>
        <p className='text-xs uppercase'>shop</p>
        </a>
        <a href='#' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 rounded-md hover:text-white'>
        <i className="bi bi-person text-2xl"></i>
        <p className='text-xs uppercase'>Home</p>
        </a>
        <a href='#' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 rounded-md hover:text-white'>
        <i className="bi bi-bag text-2xl"></i>
        <p className='text-xs uppercase'>cart</p>
        </a>
        <a href='#' className='hover:bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 rounded-md hover:text-white'>
        <i className="bi bi-search text-2xl"></i>
        <p className='text-xs uppercase'>search</p>
        </a>
    </div>
  )
}

export default PhonNavbar