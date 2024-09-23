import React from "react";
import Banner from "../assets/orange-pattern.jpg";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "../animation";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="space-y-6 max-w-xl mx-auto"
        >
          <h1 className="text-2xl text-gray-600 !text-center  sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-3 "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Subscribe;
