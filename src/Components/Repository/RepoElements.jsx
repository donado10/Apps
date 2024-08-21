import React from "react";
import Nesting from "../../assets/Nesting.svg";
import Star from "../../assets/Star.svg";
import Chield from "../../assets/Chield_alt.svg";

export const RepoName = ({ name }) => {
  return <h1 className="font-bold text-[1.2rem] text-white">{name}</h1>;
};

export const RepoDescription = ({ description }) => {
  return (
    <h2 className="text-[1rem] text-[#4A5567] font-semibold">{description}</h2>
  );
};

export const RepoForkNumber = ({ number }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="w-fit h-fit">
        <img src={Nesting} alt="nesting" />
      </div>
      <h3 className="text-[#4A5567] text-[1rem] font-semibold">{number}</h3>
    </div>
  );
};

export const RepoStargazers = ({ number }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="w-fit h-fit">
        <img src={Star} alt="star" />
      </div>
      <h3 className="text-[#4A5567] text-[1rem] font-semibold">{number}</h3>
    </div>
  );
};

export const RepoUpdateStatus = ({ day }) => {
  return (
    <h4 className="text-[0.775rem] font-semibold text-[#4A5567]">{`updated ${day} days ago`}</h4>
  );
};

export const RepoLicense = ({ license }) => {
  return (
    <div className="flex items-center justify-center gap-1">
      <div className="w-fit h-fit">
        <img src={Chield} alt="chield" />
      </div>
      <h3 className="text-[#4A5567] text-[1rem] font-semibold">{license}</h3>
    </div>
  );
};
