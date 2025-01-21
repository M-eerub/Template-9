/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <section className="overflow-x-hidden bg-black px-3 md:px-[80px] lg:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
      {/* Heading */}
      <div className="text-white w-full md:w-[50%]">
        <h1 className="text-[20px] md:text-[28px] lg:text-[32px] font-normal text-[#FF9F0D] whitespace-nowrap text-center md:text-left">
          Its Quick & Amusing!
        </h1>

        <h1 className="text-[24px] md:text-[40px] lg:text-[50px] font-bold whitespace-normal mt-3 text-center md:text-left">
          <span className="text-[#FF9F0D]">The</span> Art of Speed Food Quality
        </h1>

        <p className="text-[12px] md:text-[14px] lg:text-[16px] font-normal mt-4 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mt-6">
          <Link href="/menu" className="">
            <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[160px] md:h-[50px] lg:w-[190px] lg:h-[60px] rounded-[40px] hover:bg-yellow-800 transition duration-300 ease-in-out">
              See More
            </button>
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className="mt-[30px] ml-24 w-4/5 md:w-auto md:mt-0 flex justify-center">
        <img
          src="/main.png"
          alt="Hero Image"
          className="w-[90%] md:w-auto max-w-[590px] md:max-w-full"
        />
      </div>
    </section>
  );
}

export default Hero;