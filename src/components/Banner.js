import React from "react";
// import image
import image from "../assets/img/house-banner.png";
// import components
import Search from "../components/Search";
const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-5 lg:px">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            non magna id orci venenatis porta at in leo. Donec pharetra felis id
            porttitor mollis. Cras congue, mi vel volutpat porttitor, leo enim
            congue lorem, in congue velit metus eu tellus. Mauris gravida auctor
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
