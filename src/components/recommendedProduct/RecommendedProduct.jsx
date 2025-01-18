import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 

const RecommendedProduct = () => {
  const swiperRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState("best-seller");

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev(); // Use slidePrev for right-to-left transition
      }
    }, 5000); // Adjust the delay as needed (3000ms = 3 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Card data for 8 different cards (with different categories)
  const cards = {
    "best-seller": [
      {
        image: "https://images.othoba.com/images/thumbs/0232393_drinko-float-250-ml-litchi_300.jpeg",
        title: "Drinko",
        price: "Tk 25",
      },
      {
        image: "https://images.othoba.com/images/thumbs/0668174_ceevit-250mg-tablet-1-strip_300.webp",
        title: "Ceevit",
        price: "Tk 20",
      },
      {
        image: "https://images.othoba.com/images/thumbs/0332517_farm-egg-loose_300.jpeg",
        title: "Eggs",
        price: "Tk 200",
      },
      {
        image: "https://images.othoba.com/images/thumbs/0054043_maggi-shaad-e-magic-4gm_300.jpeg",
        title: "Maggi",
        price: "Tk 100",
      },
      {
        image: "https://images.othoba.com/images/thumbs/0676716_ss-single-wall-water-bottle-650ml_300.jpeg",
        title: "Icy Bottle",
        price: "Tk 680",
      },
      {
        image: "https://images.othoba.com/images/thumbs/0332578_potato-seasonal-pack-1-kg_300.jpeg",
        title: "Fresh Potato",
        price: "Tk 450",
      },
      {
        image: "https://images.othoba.com/images/thumbs/0553717_goodlife-pasteurized-milk-1000ml_300.jpeg",
        title: "Good Life",
        price: "Tk 250",
      },
    ],
    "new-arrival": [
      {
        image: "https://images.othoba.com/images/thumbs/0347378_frogy-slider_300.jpeg",
        title: "Frogy Kids Slider Toys Little",
        price: "Tk 300",
      },
    ],
    "top-rated": [
      {
        image: "https://images.othoba.com/images/thumbs/0688917_play-learn-building-blocks-lego-set-64pcs-bag.webp",
        title: "Kids House Game with Lots of Fun",
        price: "Tk 300",
      },
    ],
    "featured": [
      {
        image: "https://images.othoba.com/images/thumbs/0559333_happy-multipurpose-combo_300.jpeg",
        title: "Happy Multipurpose Combo",
        price: "Tk 10199",
      },
    ],
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto m5-20 px-4">
      <div className="flex flex-col justify-center text-center items-center py-4">
        <h3 className="font-semibold text-2xl mt-5">Recommended For You</h3>
        <div className="flex text-sm gap-4 flex-wrap font-semibold mt-2">
          <button
            onClick={() => handleCategoryChange("best-seller")}
            className={`transition-all mb-3 ${selectedCategory === "best-seller" ? "border-b-2 border-[#439ddf] text-[#439ddf]" : "hover:text-[#439ddf] hover:border-b-2 border-[#439ddf]"}`}
          >
            Best Seller
          </button>
          <button
            onClick={() => handleCategoryChange("new-arrival")}
            className={`transition-all mb-3 ${selectedCategory === "new-arrival" ? "border-b-2 border-[#439ddf] text-[#439ddf]" : "hover:text-[#439ddf] hover:border-b-2 border-[#439ddf]"}`}
          >
            New Arrivals
          </button>
          <button
            onClick={() => handleCategoryChange("top-rated")}
            className={`transition-all mb-3 ${selectedCategory === "top-rated" ? "border-b-2 border-[#439ddf] text-[#439ddf]" : "hover:text-[#439ddf] hover:border-b-2 border-[#439ddf]"}`}
          >
            Top Rated
          </button>
          <button
            onClick={() => handleCategoryChange("featured")}
            className={`transition-all mb-3 ${selectedCategory === "featured" ? "border-b-2 border-[#439ddf] text-[#439ddf]" : "hover:text-[#439ddf] hover:border-b-2 border-[#439ddf]"}`}
          >
            Featured
          </button>
        </div>
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
        {cards[selectedCategory].map((card, index) => (
          <SwiperSlide key={index}>
            <div className="card flex flex-col items-center justify-between border border-[#ddd] rounded-md p-5 sm:gap-5">
              <div className="left cursor-pointer relative w-34">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[80%] mx-auto h-auto"
                />
              </div>
              <div className="right sm:w-full">
                <h2 className="text-sm mb-2 font-semibold cursor-pointer hover:text-[#4088bd] transition-all text-[#454444]">
                  {card.title}
                </h2>
                <div className="star flex gap-1 text-[#ff9933] text-xs">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                  <span className="hover:text-[#4088bd] transition-all cursor-pointer text-xs text-[#ddd]">
                    (0 Reviews)
                  </span>
                <h3 className="text-sm font-bold mt-2">
                  {card.price}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendedProduct;
