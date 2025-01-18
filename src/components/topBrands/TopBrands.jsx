import 'react';

const TopBrands = () => {
  return (
    <div className='container mx-auto'>
      <h4 className='pl-4 text-lg font-semibold'>Top Weekly Brands</h4>
    <div className='container mx-auto p-4 flex gap-5 overflow-x-scroll scroll-smooth transition-all [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
      <div className="card border w-[320px] p-4 rounded-2xl flex-shrink-0 hover:border-blue-400">
        <div className="flex gap-3 items-center justify-center mb-2">
          <div>
            <img src="https://images.othoba.com/images/thumbs/0553652_realme_100.jpeg" alt="" className='rounded-lg cursor-pointer'/>
          </div>
          <div>
            <h5 className="text-semibold cursor-pointer hover:text-[#4088bd]">Realme</h5>
            <span className="transition-all text-[#5b5a5a]">(136 Products)</span>
            <div className="star flex gap-1 text-[#ff9933]">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img src="https://images.othoba.com/images/thumbs/0516440_realme-narzo-50a-prime-4gb128gb-black_100.webp" alt="" />
          <img src="https://images.othoba.com/images/thumbs/0562614_realme-c55-6gb-128gb-sun-shower_100.jpeg" alt="" />
          <img src="https://images.othoba.com/images/thumbs/0516440_realme-narzo-50a-prime-4gb128gb-black_100.webp" alt="" />
        </div>
      </div>

      <div className="card border w-[320px] p-4 rounded-2xl flex-shrink-0 hover:border-blue-400">
        <div className="flex gap-3 items-center justify-center mb-2">
          <div>
            <img src="https://images.othoba.com/images/thumbs/0578242_playtime-distribution_100.jpeg" alt="" className='rounded-lg cursor-pointer'/>
          </div>
          <div>
            <h5 className="text-semibold cursor-pointer hover:text-[#4088bd]">Playtime Distribution</h5>
            <span className="transition-all text-[#5b5a5a]">(187 Products)</span>
            <div className="star flex gap-1 text-[#ff9933]">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img src="https://images.othoba.com/images/thumbs/0313862_deer-rider_100.jpeg" alt="" />
          <img src="https://images.othoba.com/images/thumbs/0559331_happy-slider_100.jpeg" alt="" />
          <img src="https://images.othoba.com/images/thumbs/0559333_happy-multipurpose-combo_100.jpeg" alt="" />
        </div>
      </div>

      <div className="card border w-[320px] p-4 rounded-2xl flex-shrink-0 hover:border-blue-400">
        <div className="flex gap-3 items-center justify-center mb-2">
          <div>
            <img src="https://images.othoba.com/images/thumbs/0533596_topper_100.jpeg" alt="" className='rounded-lg cursor-pointer'/>
          </div>
          <div>
            <h5 className="text-semibold cursor-pointer hover:text-[#4088bd]">Topper</h5>
            <span className="transition-all text-[#5b5a5a]">(411 Products)</span>
            <div className="star flex gap-1 text-[#ff9933]">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img src="https://images.othoba.com/images/thumbs/0514320_topper-single-ss-auto-gas-stove-lpg-daisy_100.webp" alt="" />
          <img src="https://images.othoba.com/images/thumbs/0704966_beef-special-combo_100.jpeg" alt="" />
          <img src="https://images.othoba.com/images/thumbs/0592434_topper-zinnia-double-touch-stove-lpg_100.jpeg" alt="" />
        </div>
      </div>

      <div className="card border w-[320px] p-4 rounded-2xl flex-shrink-0 hover:border-blue-400">
        <div className="flex gap-3 items-center justify-center mb-2">
          <div>
            <img src="https://images.othoba.com/images/thumbs/0537933_regal-distribution_100.jpeg" alt="" className='rounded-lg cursor-pointer'/>
          </div>
          <div>
            <h5 className="text-semibold cursor-pointer hover:text-[#4088bd]">Regal Distribution</h5>
            <span className="transition-all text-[#5b5a5a]">(1326 Products)</span>
            <div className="star flex gap-1 text-[#ff9933]">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <img src="https://images.othoba.com/images/thumbs/0570169_regal-sidon-wooden-king-bed-bdh-359-3-1-20_100.jpeg" alt="" />
          <img src="https://images.othoba.com/images/thumbs/0389401_regal-sidon-wooden-wardrobe_100.jpeg" alt="" />
          <img src="https://images.othoba.com/images/thumbs/0389407_regal-sidon-wooden-two-door-cupboard_100.jpeg" alt="" />
        </div>
      </div>
    </div>
    </div>
  );
}

export default TopBrands;
