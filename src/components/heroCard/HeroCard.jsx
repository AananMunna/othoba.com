import  { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const HeroCard = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000); // Adjust the delay as needed (3000ms = 3 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Card data for 4 different cards
  const cards = [
    {
      image: "https://images.othoba.com/images/thumbs/0715621_pusti-soybean-oil-5-litre-and-pran-aromatic-chinigura-premium-rice-1kg_300.webp",
      title: "Oil-Rice Combo 1 piece 5 liter Pusti Soybean Oil, 1Kg PRAN Aromatic Chinigura Premium Rice",
      price: "Tk 12100",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0505771_rfl-electric-geyser-roland-30l-digital-tg_300.webp",
      title: "RFL Electric Geyser Roland 30L Digital TG",
      price: "Tk 22000",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0715621_pusti-soybean-oil-5-litre-and-pran-aromatic-chinigura-premium-rice-1kg_300.webp",
      title: "Oil-Rice Combo 1 piece 5 liter Pusti Soybean Oil, 1Kg PRAN Aromatic Chinigura Premium Rice",
      price: "Tk 12100",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0505771_rfl-electric-geyser-roland-30l-digital-tg_300.webp",
      title: "RFL Electric Geyser Roland 30L Digital TG",
      price: "Tk 22000",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center py-4">
        <h3 className="font-semibold text-lg">Hot Deals of the Day</h3>
        <Link to="/ProductListingPage" className="text-sm font-semibold hover:text-[#4088bd] transition-all">More Products <i className="bi bi-arrow-right"></i></Link>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true} // Enable infinite loop
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        grabCursor
        ref={swiperRef}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card flex flex-col sm:flex-row items-center justify-between border border-[#4088bd] rounded-md p-5 sm:gap-5">
              <div className="left cursor-pointer relative sm:w-full">
                <Link to='/ProductDetailPage'>
                <img
                  src={card.image}
                  alt={card.title}
                />
                </Link>
                <div className="bg-[#4e4e4e] flex items-center justify-evenly p-3 rounded-md text-white font-bold text-center gap-3 absolute bottom-0 w-full left-0 right-0 time">
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
                <h2 className="text-lg mb-2 font-semibold cursor-pointer hover:text-[#4088bd] transition-all">
                  <Link to='/ProductDetailPage'>
                  {card.title}
                  </Link>
                </h2>
                <div className="star flex gap-1 text-[#ddd]">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <span className="hover:text-[#4088bd] transition-all cursor-pointer">
                    (0 Reviews)
                  </span>
                </div>
                <h3 className="text-lg font-bold mt-2">{card.price}</h3>
                <Link to='/ProductDetailPage'>
                <button className="border-2 border-black rounded-sm py-1 px-5 text-center text-md font-semibold uppercase mt-2 hover:bg-[#5face4] hover:text-white hover:border-[#5face4] transition-all">
                  <i className="bi bi-cart text-xl mr-1"></i>buy now
                </button>
                </Link>
                <Link to='/compare'>
                <i className="fa-solid fa-scale-balanced text-2xl ml-5 cursor-pointer hover:text-[#5face4] transition-all"></i>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCard;
