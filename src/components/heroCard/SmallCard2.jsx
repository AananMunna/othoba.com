import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const SmallCard2 = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    }, 5000); // Adjust the delay as needed (3000ms = 3 seconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Card data for 8 different cards
  const cards = [
    {
      image: "https://images.othoba.com/images/thumbs/0701511_mr-noodles-paper-cup-4-pcs-combo_200.jpeg",
      title: "Mr. Noodles",
      price: "Tk 120",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0713007_good-luck-coloring-book-alphabet_200.webp",
      title: "Kids Book",
      price: "Tk 300",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0577061_star-queen-kitchen-rack-5-step-with-tray-p-w-tel_200.jpeg",
      title: "RFL Comfortable Chair",
      price: "Tk 780",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0714129_good-luck-coloring-book-unicorn_200.jpeg",
      title: "Coloring Book",
      price: "Tk 22000",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0701511_mr-noodles-paper-cup-4-pcs-combo_200.jpeg",
      title: "Mr. Noodles",
      price: "Tk 120",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0713007_good-luck-coloring-book-alphabet_200.webp",
      title: "Kids Book",
      price: "Tk 300",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0577061_star-queen-kitchen-rack-5-step-with-tray-p-w-tel_200.jpeg",
      title: "RFL Comfortable Chair",
      price: "Tk 780",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0714129_good-luck-coloring-book-unicorn_200.jpeg",
      title: "Coloring Book",
      price: "Tk 22000",
    },
     
  ];

  return (
    <div className="container mx-auto px-4">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true} // Enable infinite loop
        breakpoints={{
          640: { slidesPerView: 1 }, // 1 card per row for small screens
          768: { slidesPerView: 2 }, // 2 cards per row for medium screens
          1024: { slidesPerView: 4 }, // 4 cards per row for large screens
        }}
        grabCursor
        ref={swiperRef}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Link to='/ProductDetailPage'>
            <div className="card flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="left cursor-pointer relative w-34">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto"
                />
              </div>
              <div className="right sm:w-full">
                <h2 className="text-sm mb-2 font-semibold cursor-pointer hover:text-[#4088bd] transition-all text-[#454444]">
                  {card.title}
                </h2>
                <div className="star flex gap-1 text-[#ddd]">
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                  <i className="bi bi-star-fill"></i>
                </div>
                <h3 className="text-sm font-bold mt-2">{card.price}</h3>
              </div>
            </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmallCard2;
