import  { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const sliderData = [
  {
    src: "https://images.othoba.com/images/thumbs/0584115_furniture-big-saving-days_120.jpeg",
    title: "Furniture Big Saving Days",
  },
  {
    src: "https://images.othoba.com/images/thumbs/0578718_special-weekly-offer_120.jpeg",
    title: "Special Weekly Offer",
  },
  {
    src: "https://images.othoba.com/images/thumbs/0667855_fashion_120.jpeg",
    title: "Fashion",
  },
  {
    src: "https://images.othoba.com/images/thumbs/0533529_electronics_120.webp",
    title: "Electronic",
  },
  {
    src: "https://images.othoba.com/images/thumbs/0676164_building-materials_120.jpeg",
    title: "Building Materials",
  },
  {
    src: "https://images.othoba.com/images/thumbs/0533528_home-living_120.webp",
    title: "Home & Living",
  },
  {
    src: "https://images.othoba.com/images/thumbs/0587377_riding-sports-fitness_120.webp",
    title: "Riding, Sports & Fitness",
  },
  {
    src: "https://images.othoba.com/images/thumbs/0616971_biking-accessories_120.jpeg",
    title: "Biking & Accessories",
  },
  {
    src: "https://images.othoba.com/images/thumbs/0680688_gift-packages_120.jpeg",
    title: "Gift Packages",
  },
];

const CircleCard = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % sliderData.length
      );
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Scroll to the current slide
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.scrollTo({
        left: currentIndex * 120, // Adjust scroll offset based on image size
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <div className="container p-4 mx-auto">
      <div
        ref={sliderRef}
        className="circleCard flex items-center justify-start gap-3 lg:gap-5 overflow-x-scroll scroll-smooth transition-all [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {sliderData.map((item, index) => (
          <Link to="/ProductListingPage"
            key={index}
            className="card flex flex-col items-center justify-center text-center"
          >
            <img
              className="max-w-none w-16 sm:w-20 lg:w-28 rounded-full cursor-pointer hover:scale-95 hover:border-8 transition-all border-[#fff] hover:shadow-2xl"
              src={item.src}
              alt={item.title}
            />
            <Link
              to="/ProductListingPage"
              className="w-20 sm:w-24 lg:w-28 font-medium text-xs mt-2 sm:mt-3 leading-none uppercase hover:text-blue-500 transition-all"
            >
              {item.title}
            </Link>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CircleCard;
