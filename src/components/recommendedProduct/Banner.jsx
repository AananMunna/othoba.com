import 'react'

const Banner = () => {
  return (
    <div className="bg-[url('https://d-themes.com/wordpress/wolmart/demo-12/wp-content/uploads/sites/15/2021/04/banner-7.jpg')] h-54 w-full bg-cover bg-center bg-no-repeat my-8 py-5 lg:py-0 flex items-center justify-around container mx-auto overflow-hidden">
  <div className="left hidden lg:block">
    <img src="https://images.othoba.com/images/thumbs/0552494_App--Image.png" className='w-96' alt=""/>
  </div>
  <div className="middle">
  <button className="border-2 rounded-sm py-2 px-5 text-center text-md font-semibold uppercase mt-2 bg-[#5face4] text-white border-[#5face4] transition-all hover:border-2 hover:border-white">buy now</button>
  </div>
  <div className="right">
    <a href="#"><img src="https://www.othoba.com/Themes/Othoba/Content/images/button-1.png" alt=""  /></a>
  </div>
</div>
  )
}

export default Banner