import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-200 ">
      <div className="sm:max-w-xl md:max-w-full lg:max-w-full items-center   pt-12">
      <h2 className=" text-center text-2xl leading-tight lg:text-6xl  font-bold text-blue-500">
        Welcome To HeroGadget
      </h2>
      <p className="my-6 text-center lg:text-xl sm:text-base md:text-lg text-gray-900">
        Best E-commerce platform for buying high quality Smart Home <br />{" "}
        Appliances at extremely affordable Price.
      </p>
     
      </div>
    </div>
  );
};

export default Home;
