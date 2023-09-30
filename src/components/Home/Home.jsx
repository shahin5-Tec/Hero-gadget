import React from "react";
import { Link } from "react-router-dom";
import heroImg from '../../assets/hero.jpg'

const Home = () => {
  return (
   <section>
     <div className="bg-gray-200 ">
      <div className="sm:max-w-xl md:max-w-full pb-24 lg:pb-52  lg:max-w-full items-center   pt-20">
      <h2 className=" text-center text-2xl leading-tight lg:text-6xl  font-bold text-blue-500">
        Welcome To HeroGadget
      </h2>
      <p className="my-6 text-center lg:text-xl sm:text-base md:text-lg text-gray-900">
        Best E-commerce platform for buying high quality Smart Home <br />{" "}
        Appliances at extremely affordable Price.
      </p>
      <div className=" text-center py-5 flex flex-wrap justify-center gap-5">
        <Link to="/shop">
          <button className="shop-btn">Shop Now</button>
        </Link>
        <Link to='/about'>
          <button className="btn-outline">Learn more</button>
        </Link>
      </div>
      </div>
     
    </div>
    <img className="w-5/6 mx-auto mb-12 -mt-12 lg:-mt-40 rounded-lg shadow-md bg-gray-500"
     src={heroImg} alt="" />
     <hr className="mb-5" />
   </section>
  );
};

export default Home;
