import "react";
import Slider from "react-slick";

const ImageCarousel = () => {
  const images = [
    "https://images.othoba.com/images/thumbs/0710359_Comfy-TSW.jpeg",
    "https://images.othoba.com/images/thumbs/0716647_RFL-Geyser-TSW.jpeg",
    "https://images.othoba.com/images/thumbs/0713523_grocery%20web%20top.jpeg",
    "https://images.othoba.com/images/thumbs/0714214_wardrobe%20top%20web.jpeg",
    "https://images.othoba.com/images/thumbs/0713561_Top%20Slider%20web%202.jpeg",
    "https://images.othoba.com/images/thumbs/0714335_Geyser-Flash-Sale-TSW.jpeg",
  ];

  const settings = {
    dots: true, // Enable dotted navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable arrows (optional)
    appendDots: (dots) => (
      <div>
        <ul className="flex justify-center space-x-2 -mt-14">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="w-3 h-3 bg-gray-300 rounded-full hover:bg-gray-600 transition-all duration-300"
      ></div>
    ),
  };

  return (
    <div className=" my-1 container mx-auto p-4 rounded-lg md:flex gap-5">
        <div className="w-[100%] md:w-[75%] cursor-pointer">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </Slider>
      </div>
      <div className="w-[100%] md:w-[30%] flex flex-col gap-2">
        <div className="flex flex-col gap-2">
        <img src="https://images.othoba.com/images/thumbs/0716706_kitchen%20sink%20right%20side%20web.jpeg" alt=""  className="rounded-xl h-[50%] cursor-pointer"/>
        <img src="https://images.othoba.com/images/thumbs/0716675_toys-website-imeage.jpeg" alt=""  className="rounded-xl h-[50%] cursor-pointer"/>
        </div>
        <div className="flex gap-2">
            <img src="https://images.othoba.com/images/thumbs/0716738_Flower-Tub-RSW.jpeg" alt="" className="rounded-xl w-[49%] cursor-pointer"/>
            <img src="https://images.othoba.com/images/thumbs/0716680_Topper-RSW.jpeg" alt="" className="rounded-xl w-[49%] cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
