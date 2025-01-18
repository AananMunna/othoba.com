import 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#439ddf] my-5'>
        <div className="container mx-auto py-6 px-4 items-center justify-between gap-10 md:flex">
            <div className="left text-white text-center my-5">
            <i className="bi bi-envelope text-4xl"></i>
                <h4 className='font-bold text-lg uppercase'>Subscribe To Our Newsletter</h4>
                <p className='text-sm'>Get all the latest information on Events, Sales and Offers.</p>
            </div>
            <div className="right text-white text-center my-5">
                <h4 className='font-bold text-lg uppercase'>Download our new app today!</h4>
                <p className='text-sm'>Dont Miss our mobile-only offers and shop with Android Play.</p>
                <button className='border rounded-lg px-5 py-2 hover:bg-[#3794dd] w-44 mx-auto mt-2'>Download <i className="bi bi-arrow-down"></i></button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter