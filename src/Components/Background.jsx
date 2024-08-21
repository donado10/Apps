import React from "react";
import bgImage from "../assets/bg-cafe.jpg";

const Background = () => {
  return (
    <div className=" absolute inset-0 w-screen h-[100%] grow  flex items-center  flex-col -z-10 ">
      <div className="w-fit h-fit">
        <img
          src={bgImage}
          className="w-full aspect-[1/0.2]"
          alt="background image"
        />
      </div>
      <div className="bg-black bg-cover	w-screen grow"></div>
    </div>
  );
};

export default Background;
