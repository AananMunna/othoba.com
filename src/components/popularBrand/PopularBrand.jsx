import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const PopularBrand = () => {
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
      image: "https://images.othoba.com/images/thumbs/0533610_Winner.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0533615_Vision.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0275302.png"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0533625_Playtime-Toy.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0651863_Duranta.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0533627_Regal.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0533618_Mithai.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0533610_Winner.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0533610_Winner.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0533615_Vision.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0275302.png"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0533625_Playtime-Toy.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0651863_Duranta.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0533627_Regal.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0533618_Mithai.jpeg"
    },
    {
      image: "https://images.othoba.com/images/thumbs/0533610_Winner.jpeg"
    },
  ];

  return (
    <div className="container mx-auto px-4 my-2">
        <h4 className="my-5 text-lg font-semibold">Most Popular Brands</h4>
        <div className="border pt-5">
      <Swiper
        slidesPerView={8} // Always 2 cards visible per row
        spaceBetween={0}
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 3000, // Autoplay with a delay of 3 seconds
          disableOnInteraction: false, // Continue autoplay even if the user interacts
        }}
        grabCursor
        ref={swiperRef}
        rtl={true} // Enable right-to-left direction
        // breakpoints={{
        //   640: { slidesPerView: 10 }, // 1 card per row for small screens
        //   768: { slidesPerView: 20 }, // 2 cards per row for medium screens
        //   1024: { slidesPerView: 40 }, // 4 cards per row for large screens
        // }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} >
            <Link to="/ProductListingPage" className="">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-[100%] h-auto"
                />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default PopularBrand;
