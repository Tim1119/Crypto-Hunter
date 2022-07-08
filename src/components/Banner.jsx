import React from "react";
import Carousel from "./Carousel";

const Banner = () => {
  return (
    <section className="bg-hero-pattern">
      <div className="h-[400px] flex flex-col pt-[24px] justify-around items-center">
        <div className="flex flex-col justify-center text-center" >
          <h1 className="font-bold text-5xl md:text-6xl mb-4">Crypto Hunter</h1>
          <p className="font-medium text-md">
            Get all the info regarding your favourite Crypto Currency
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default Banner;
