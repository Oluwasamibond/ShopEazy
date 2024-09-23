import { motion } from "framer-motion";
import React from "react";
import Slider from "react-slick";
import { slideUpVariants, zoomInVariants } from "../animation";

const TestimonialsData = [
  {
    id: 1,
    name: "Victor Macki",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, reiciendis?",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, reiciendis?",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, reiciendis?",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Sachin Tendulkar",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, reiciendis?",
    img: "https://picsum.photos/104/104",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    Infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          Infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          InitialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">What Our Customers Are Saying</p>
          <motion.h1 
          initial='hidden'
          whileInView='visible'
          variants={zoomInVariants}
          className="text-3xl font-bold">Testimonials</motion.h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
            molestias.
          </p>
        </div>
        {/* Testimonials card */}
        <motion.div
         initial='hidden'
         whileInView='visible'
         variants={zoomInVariants}
        >
          <Slider {...settings}>
            {TestimonialsData.map((data, index) => (
              <div className="my-6">
                <div
                  key={index}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl
                dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-2">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;