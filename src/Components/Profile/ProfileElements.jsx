import React from "react";
import { useApplicationContext } from "../AppContext";
import { capitalizeFirstLetter } from "../../utils/functions";

export const ProfileName = ({ name }) => {
  const ctxName = useApplicationContext();

  console.log(ctxName);

  return (
    <>
      {ctxName && (
        <h1 className="user_profile w-fit font-bold text-white text-3xl">
          {capitalizeFirstLetter(ctxName.name)}
        </h1>
      )}
    </>
  );
};

export const ProfileBio = ({ bio }) => {
  const ctxBio = useApplicationContext();
  return (
    <h3 className="user_bio w-fit font-semibold text-[#4A5567]">
      {ctxBio.bio}
    </h3>
  );
};

export const ProfileMetadata = ({ title, content }) => {
  return (
    <div className="w-fit h-[3rem] rounded-md flex items-center bg-[#111729]">
      <span className="border-r-[1px] border-[#4A5567] w-[7rem] flex items-center justify-center text-[#4A5567] font-semibold">
        {title}
      </span>
      <h2 className="p-3 text-white">{content}</h2>
    </div>
  );
};

export const ProfileImage = ({ image }) => {
  const ctxImage = useApplicationContext();
  return (
    <div className="w-4/5 aspect-[1/1] ">
      <img className="rounded-lg" src={ctxImage.image} alt="" />
    </div>
  );
};
