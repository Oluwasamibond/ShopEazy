import { motion } from "framer-motion";
import React from "react";
import { slideUpVariants, zoomInVariants } from "../animation";
import Img1 from "../assets/shirt.png";
import Img2 from "../assets/shirt2.png";
import Img3 from "../assets/shirt3.png";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maiores",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maiores",
  },
  {
    id: 3,
    img: Img3,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maiores",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Shirt",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, maiores",
  },
];

const TopProducts = ({handleOrderPopup}) => {

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24 max-w-[600px]">
          <p className="text-sm text-primary">Top Selling Products for you</p>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="text-3xl font-bold font-serif"
          >
            Best Products
          </motion.h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
            blanditiis.
          </p>
        </div>
        {/* Body section */}
        <motion.div 
         initial="hidden"
         whileInView="visible"
         variants={slideUpVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data, index) => (
            <div
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80
            dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
            >
              {/* image section*/}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105
                duration-300 drop-shadow-md"
                />
              </div>
              {/* details section*/}
              <div className="p-4 text-center">
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-400 group-hover:text-white text-sm duration-300 line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4
                rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TopProducts;
