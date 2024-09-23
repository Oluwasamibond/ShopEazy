import React from "react";
import { motion } from "framer-motion";
import Img1 from "../assets/women.png";
import Img2 from "../assets/women2.jpg";
import Img3 from "../assets/women3.jpg";
import Img4 from "../assets/women4.jpg";
import Img5 from "../assets/women2.jpg";
import { slideUpVariants, zoomInVariants } from "../animation";

import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "White",
  },
  {
    id: 2,
    img: Img2,
    title: "Women Western",
    rating: 4.5,
    color: "Red",
  },
  {
    id: 3,
    img: Img3,
    title: "Googles",
    rating: 4.7,
    color: "Brown",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
  },
  {
    id: 4,
    img: Img5,
    title: "Fashion T-Shirt",
    rating: 4.4,
    color: "Pink",
  },
];
const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-sm text-primary">Top Selling Products for you</p>
          <motion.h1
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="text-3xl font-bold font-serif"
          >
            Products
          </motion.h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti,
            blanditiis.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">
            {/* Card section */}
            {ProductsData.map((data, index) => (
              <div key={index} className="space-y-3">
                <motion.img
                  initial="hidden"
                  whileInView="visible"
                  variants={slideUpVariants}
                  src={data.img}
                  alt=""
                  className="h-[250px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              View All My Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
