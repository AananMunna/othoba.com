import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";

const SmallCard = () => {
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
      image: "https://images.othoba.com/images/thumbs/0507903_ajina-maple-digit-round-wall-clock-blue_200.webp",
      title: "Apple Clock",
      price: "Tk 120",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0713830_trendy-co-ord-set-stylish-matching-outfit-for-effortless-chic-look_200.webp",
      title: "Dress for women",
      price: "Tk 300",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0309920_stylee-ventral-arm-chair-lime-green_200.jpeg",
      title: "RFL Comfortable Chair",
      price: "Tk 780",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0711836_othoba-exclusive-duranta-steel-1-spd-ghost-rider-12-inch-bicycle-for-kids_200.jpeg",
      title: "Cycle for kids",
      price: "Tk 22000",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0507903_ajina-maple-digit-round-wall-clock-blue_200.webp",
      title: "Clock Apple",
      price: "Tk 120",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0697481_hot-cold-stylish-ss-cola-water-bottle-450-ml-leak-proof-with-eye-catching-spiral-print-wide-mouth-fo_200.webp",
      title: "Kids Bottle",
      price: "Tk 300",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0309920_stylee-ventral-arm-chair-lime-green_200.jpeg",
      title: "RFL Comfortable Chair",
      price: "Tk 780",
    },
    {
      image: "https://images.othoba.com/images/thumbs/0711836_othoba-exclusive-duranta-steel-1-spd-ghost-rider-12-inch-bicycle-for-kids_200.jpeg",
      title: "Coloring Book",
      price: "Tk 22000",
    },
  ];

  return (
    <div className="container mx-auto px-4">
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
          1024: { slidesPerView: 4 }, // 4 cards per row for large screens
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Link to='ProductDetailPage'>
            <div className="card flex flex-col sm:flex-row items-center justify-between gap-5 mt-16 mb-5">
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

export default SmallCard;
