import React from "react";
import Image1 from "../assets/women.png";
import Image2 from "../assets/shopping.png";
import Image3 from "../assets/sale.png";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";


const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Up to 50% off on all Men's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus sequi commodi consequatur repellat, laudantium non?",
  },
  {
    id: 2,
    img: Image2,
    title: "Up to 30% off on all Women's Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus sequi commodi consequatur repellat, laudantium non?",
  },
  {
    id: 3,
    img: Image3,
    title: "Up to 70% off on all Products Sale",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus sequi commodi consequatur repellat, laudantium non?",
  },
];

const Hero = ({handleOrderPopup}) => {
  var settings = {
    dots: false,
    arrows: false,
    Infinity: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white">
      {/*background*/}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 center rounded-3xl rotate-45 -z-9"></div>
      {/*Hero section*/}
      <motion.div 
       initial='hidden'
       whileInView='visible'
       variants={zoomInVariants}
      className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div
                  className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left
             order-2 sm:order-1 relative -z-9"
                >
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                    {data.title}
                  </h1>
                  <p className="text-sm p-2">{data.description}</p>
                  <div>
                    <button onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105
                   duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px]
                        sm:scale-125 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Hero;
