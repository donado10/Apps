import React, { forwardRef, useEffect, useState } from "react";
import background from "../assets/background.png";
import Search from "../assets/Search.svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useInterval } from "../Hooks/use-interval";
import { useFetchData } from "../Hooks/use-fetch-data";
import { capitalizeFirstLetter } from "../utils/functions";

/* const data = {
  name: "donado10",
  image: "https://avatars.githubusercontent.com/u/99742781?v=4",
  bio: "Ado two times",
};
 */
const SearchResults = ({ text }) => {
  console.log(text);
  const data = useFetchData(text);
  const navigate = useNavigate();

  return (
    <div
      className=" bg-[#1D1B48] p-3  rounded-lg w-full laptop:h-24 flex items-center gap-4 hover:cursor-pointer tablet:h-20"
      onClick={(e) => {
        e.preventDefault();
        navigate(`/?q=${data.name}`);
      }}
    >
      <div className="image w-20 aspect-[1/1] rounded-lg">
        <img src={data.image} className="w-full h-full rounded-lg" alt="repo" />
      </div>
      <div className="information flex flex-col gap-2">
        <h1 className="text-xl font-bold text-[#CDD5E0]">
          {capitalizeFirstLetter(data.name)}
        </h1>
        <h2 className="text-[#CDD5E0] text-sm">{data.bio}</h2>
      </div>
    </div>
  );
};

const BackgroundImage = () => {
  return (
    <>
      <img
        className="w-full tablet:scale-x-[1.9] tablet:aspect-[1/0.4] laptop:scale-x-[1] laptop:aspect-auto"
        src={background}
        alt="background image"
      />
    </>
  );
};

const SearchForm = forwardRef(({}, ref) => {
  return (
    <form
      className="bg-[#364153] rounded-lg  w-full h-14  p-2 flex items-center gap-3 "
      onSubmit={(e) => {
        e.preventDefault();
        const username = ref.current.value;
        navigate(`/?q=${username}`);
      }}
    >
      <div className="w-fit h-fit">
        <img src={Search} alt="search" />
      </div>
      <input
        type="text"
        className="bg-transparent  outline-none p-1 w-full text-[#CDD5E0] "
        placeholder="username"
        ref={ref}
      />
    </form>
  );
});

const Background = () => {
  const location = useLocation();
  const userRef = useRef(null);
  const [searchUser, setSearchUser] = useState("");
  const username = location.search.split("=")[1];

  useInterval(() => {
    const username = userRef.current.value;
    if (username === searchUser) {
      return;
    }
    setSearchUser(username);
  }, 3000);

  useEffect(() => {
    setSearchUser(null);
    userRef.current.value = "";
  }, [username]);

  return (
    <div className="relative flex items-center justify-center w-screenborder-2 overflow-hidden">
      <BackgroundImage />
      <div className="absolute inset-0 laptop:w-1/3 h-fit   laptop:top-6 left-[50%] laptop:-translate-x-2/4 laptop:-translate-y-0 flex flex-col gap-2 tablet:w-2/3 tablet:top-6 tablet:-translate-x-2/4 tablet:-translate-y-0  ">
        <SearchForm ref={userRef} />
        {searchUser && <SearchResults text={searchUser} />}
      </div>
    </div>
  );
};

export default Background;
