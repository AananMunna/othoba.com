import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const TopBrands = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let scrollInterval;

    if (slider) {
      scrollInterval = setInterval(() => {
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
          slider.scrollLeft = 0; // Reset to the start
        } else {
          slider.scrollLeft += 320; // Scroll by one card width
        }
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      clearInterval(scrollInterval); // Cleanup on component unmount
    };
  }, []);

  const brands = [
    {
      name: "Realme",
      products: 136,
      rating: 5,
      logo: "https://images.othoba.com/images/thumbs/0553652_realme_100.jpeg",
      images: [
        "https://images.othoba.com/images/thumbs/0516440_realme-narzo-50a-prime-4gb128gb-black_100.webp",
        "https://images.othoba.com/images/thumbs/0562614_realme-c55-6gb-128gb-sun-shower_100.jpeg",
        "https://images.othoba.com/images/thumbs/0516440_realme-narzo-50a-prime-4gb128gb-black_100.webp",
      ],
    },
    {
      name: "Playtime Distribution",
      products: 187,
      rating: 5,
      logo: "https://images.othoba.com/images/thumbs/0578242_playtime-distribution_100.jpeg",
      images: [
        "https://images.othoba.com/images/thumbs/0313862_deer-rider_100.jpeg",
        "https://images.othoba.com/images/thumbs/0559331_happy-slider_100.jpeg",
        "https://images.othoba.com/images/thumbs/0559333_happy-multipurpose-combo_100.jpeg",
      ],
    },
    {
      name: "Topper",
      products: 411,
      rating: 5,
      logo: "https://images.othoba.com/images/thumbs/0533596_topper_100.jpeg",
      images: [
        "https://images.othoba.com/images/thumbs/0514320_topper-single-ss-auto-gas-stove-lpg-daisy_100.webp",
        "https://images.othoba.com/images/thumbs/0704966_beef-special-combo_100.jpeg",
        "https://images.othoba.com/images/thumbs/0592434_topper-zinnia-double-touch-stove-lpg_100.jpeg",
      ],
    },
    {
      name: "Regal Distribution",
      products: 1326,
      rating: 5,
      logo: "https://images.othoba.com/images/thumbs/0537933_regal-distribution_100.jpeg",
      images: [
        "https://images.othoba.com/images/thumbs/0570169_regal-sidon-wooden-king-bed-bdh-359-3-1-20_100.jpeg",
        "https://images.othoba.com/images/thumbs/0389401_regal-sidon-wooden-wardrobe_100.jpeg",
        "https://images.othoba.com/images/thumbs/0389407_regal-sidon-wooden-two-door-cupboard_100.jpeg",
      ],
    },
    {
      name: "Realme",
      products: 136,
      rating: 5,
      logo: "https://images.othoba.com/images/thumbs/0553652_realme_100.jpeg",
      images: [
        "https://images.othoba.com/images/thumbs/0516440_realme-narzo-50a-prime-4gb128gb-black_100.webp",
        "https://images.othoba.com/images/thumbs/0562614_realme-c55-6gb-128gb-sun-shower_100.jpeg",
        "https://images.othoba.com/images/thumbs/0516440_realme-narzo-50a-prime-4gb128gb-black_100.webp",
      ],
    },
    {
      name: "Playtime Distribution",
      products: 187,
      rating: 5,
      logo: "https://images.othoba.com/images/thumbs/0578242_playtime-distribution_100.jpeg",
      images: [
        "https://images.othoba.com/images/thumbs/0313862_deer-rider_100.jpeg",
        "https://images.othoba.com/images/thumbs/0559331_happy-slider_100.jpeg",
        "https://images.othoba.com/images/thumbs/0559333_happy-multipurpose-combo_100.jpeg",
      ],
    },
    {
      name: "Topper",
      products: 411,
      rating: 5,
      logo: "https://images.othoba.com/images/thumbs/0533596_topper_100.jpeg",
      images: [
        "https://images.othoba.com/images/thumbs/0514320_topper-single-ss-auto-gas-stove-lpg-daisy_100.webp",
        "https://images.othoba.com/images/thumbs/0704966_beef-special-combo_100.jpeg",
        "https://images.othoba.com/images/thumbs/0592434_topper-zinnia-double-touch-stove-lpg_100.jpeg",
      ],
    },
    {
      name: "Regal Distribution",
      products: 1326,
      rating: 5,
      logo: "https://images.othoba.com/images/thumbs/0537933_regal-distribution_100.jpeg",
      images: [
        "https://images.othoba.com/images/thumbs/0570169_regal-sidon-wooden-king-bed-bdh-359-3-1-20_100.jpeg",
        "https://images.othoba.com/images/thumbs/0389401_regal-sidon-wooden-wardrobe_100.jpeg",
        "https://images.othoba.com/images/thumbs/0389407_regal-sidon-wooden-two-door-cupboard_100.jpeg",
      ],
    },
  ];

  return (
    <div className="container mx-auto">
      <h4 className="pl-4 text-lg font-semibold mb-4">Top Weekly Brands</h4>
      <div
        ref={sliderRef}
        className="p-4 flex gap-5 overflow-x-scroll scroll-smooth transition-all [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {brands.map((brand, index) => (
          <Link to='/ProductDetailPage'
            key={index}
            className="card border w-[320px] p-4 rounded-2xl flex-shrink-0 hover:border-blue-400 transition-shadow"
          >
            {/* Brand Header */}
            <div className="flex gap-3 items-center justify-center mb-2">
              <img
                src={brand.logo}
                alt={brand.name}
                className="rounded-lg cursor-pointer w-12 h-12"
              />
              <div>
                <h5 className="font-semibold cursor-pointer hover:text-blue-500">
                  {brand.name}
                </h5>
                <span className="text-gray-500">{`(${brand.products} Products)`}</span>
                <div className="flex gap-1 text-yellow-400 mt-1">
                  {Array.from({ length: brand.rating }).map((_, i) => (
                    <i key={i} className="bi bi-star-fill"></i>
                  ))}
                </div>
              </div>
            </div>
            {/* Brand Images */}
            <div className="flex justify-center items-center gap-2 cursor-pointer">
              {brand.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Brand product ${i}`}
                  className="w-16 h-16 object-cover rounded-lg"
                />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopBrands;
