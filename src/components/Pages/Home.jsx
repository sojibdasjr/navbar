import { Carousel } from "flowbite-react";
import React from "react";
import banner from "../../assets/Illustration.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto max-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my8 py-12 flex flex-col md:flex-row-reverse  items-center justify-between gap-12 ">
            <div>
              <img src={banner} alt="" />
            </div>
            {/* Hero test */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights{" "}
                <span className="text-brandPrimary leading-snug">
                  from 8 years
                </span>
                <p>
                  Where to grow your business as a photographer: site or social
                  media?
                </p>
              </h1>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
