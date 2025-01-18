import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 

const TrendingProduct = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev(); // Use slidePrev for right-to-left transition
      }
    }, 5000); // Adjust the delay as needed (3000ms = 3 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Card data for 8 different cards
  const cards = [
    {
      image: "https://images.othoba.com/images/thumbs/0559333_happy-multipurpose-combo_300.jpeg",
      title: "Happy Multipurpose Combo",
      price: "Tk 10199",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0347378_frogy-slider_300.jpeg",
      title: "Frogy Kids Slider Toys Little.",
      price: "Tk 300",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0507974_tent-play-house-toy-with-50-ball-set-for-kids-multicolor.webp",
      title: "Tent Play House Toy",
      price: "Tk 780",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0528883_commando-bike.jpeg",
      title: "Commando Bike",
      price: "Tk 22000",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0549439_mini-coper.-2-jpg.jpeg",
      title: "mini Car for kids",
      price: "Tk 1220",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0688917_play-learn-building-blocks-lego-set-64pcs-bag.webp",
      title: "Kids House Game with lots of fun",
      price: "Tk 300",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0642861_mens-printed-premium-cotton-panjabi_300.webp",
      title: "Mens Printed Panjabi",
      price: "Tk 780",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0642495_nima-electric-2-in-1-blender-and-grinder_300.webp",
      title: "Kitchen Electronic",
      price: "Tk 22000",
    },
  ];

  return (
    <div className="container mx-auto m5-20 px-4">
    <div className="flex justify-between items-center py-4">
      <h3 className="font-semibold text-lg">Trending Products</h3>
      <a href="#" className="text-sm font-semibold hover:text-[#4088bd] transition-all">More Products <i className="bi bi-arrow-right"></i></a>
    </div>
      <Swiper
        slidesPerView={2} // Always 2 cards visible per row
        spaceBetween={20}
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 3000, // Autoplay with a delay of 3 seconds
          disableOnInteraction: false, // Continue autoplay even if the user interacts
        }}
        grabCursor
        ref={swiperRef}
        rtl={true} // Enable right-to-left direction
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 card per row for small screens
          768: { slidesPerView: 2 }, // 2 cards per row for medium screens
          1024: { slidesPerView: 5 }, // 4 cards per row for large screens
        }}
        pagination={{ clickable: true }} // Add this line to show clickable dots
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card flex flex-col  items-center justify-between border border-[#ddd] rounded-md p-5 sm:gap-5">
              <div className="left cursor-pointer relative w-34">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[80%] mx-auto h-auto"
                />
                <div className="bg-[#4e4e4e] flex items-center justify-evenly rounded-md text-white font-semibold text-xs p-1 text-center gap-3 absolute bottom-0 w-full left-0 right-0 time">
                  <div>
                    <h6>00</h6>
                    <h6>Days</h6>
                  </div>
                  <div>
                    <h6>00</h6>
                    <h6>Hrs</h6>
                  </div>
                  <div>
                    <h6>00</h6>
                    <h6>Mins</h6>
                  </div>
                  <div>
                    <h6>00</h6>
                    <h6>Secs</h6>
                  </div>
                </div>
              </div>
              <div className="right sm:w-full">
                <h2 className="text-sm mb-2 font-semibold cursor-pointer hover:text-[#4088bd] transition-all text-[#454444]">
                  {card.title}
                </h2>
                <div className="star flex gap-1 text-[#ddd] text-xs">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <span className="hover:text-[#4088bd] transition-all cursor-pointer">
                    (0 Reviews)
                  </span>
                </div>
                <h3 className="text-sm font-bold mt-2">{card.price} <del className="text-[#a8a7a7] ml-3">Tk 120</del></h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingProduct;
