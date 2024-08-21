import React from "react";
import StarFill from "../assets/Star_fill.svg";
import Star from "../assets/Star.svg";

export const CoffeeTendance = () => {
  return (
    <span className="absolute inset-2 w-[5rem] h-fit rounded-xl z-10 text-center bg-[#F6C768] text-[0.775rem] font-semibold pt-[0.15rem] pb-[0.15rem]">
      Popular
    </span>
  );
};

export const CoffeeImage = ({ image }) => {
  return (
    <div className="w-full h-3/5 rounded-lg overflow-hidden">
      <img className="w-full h-full " src={image} alt="" />
    </div>
  );
};

export const CoffeeName = ({ name }) => {
  return <h1 className="text-lg font-semibold text-[white] ">{name}</h1>;
};

export const CoffeePrice = ({ price }) => {
  return (
    <span className="text-sm w-14 p-1 bg-[#BEE3CC] rounded-md text-center font-semibold">
      {price}
    </span>
  );
};

export const CoffeeRatingVote = ({ voteNumber }) => {
  return (
    <h4 className="text-[#6F757C] font-semibold">
      {voteNumber > 0 && `(${voteNumber} votes)`}
      {voteNumber === 0 && `No ratings`}
    </h4>
  );
};
export const CoffeeRatingAvarage = ({ avarage }) => {
  return <h3 className="text-white font-semibold">{avarage}</h3>;
};
export const CoffeeRatingStar = ({ isFill }) => {
  return (
    <div className="w-fit h-fit">
      {isFill && <img src={StarFill} alt="star fill" />}
      {!isFill && <img src={Star} alt="star fill" />}
    </div>
  );
};
export const CoffeeRating = ({ isFill, voteNumber, avarageNumber }) => {
  return (
    <div className="flex items-center gap-1">
      <CoffeeRatingStar isFill={isFill} />
      <CoffeeRatingAvarage avarage={avarageNumber} />
      <CoffeeRatingVote voteNumber={voteNumber} />
    </div>
  );
};
