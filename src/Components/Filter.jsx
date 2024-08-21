import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const FilterButton = ({ text, filter }) => {
  const location = useLocation();
  const filterParam = location.search.split("=")[1];
  const [selectedBackground, setselectedBackground] = useState();

  useEffect(() => {
    if (filterParam === filter) {
      setselectedBackground("bg-[#6F757C]");
      return;
    }
    setselectedBackground("");
  }, [filterParam]);

  return (
    <NavLink
      to={`/?filter=${filter}`}
      className={`p-2 w-40 aspect-[1/0.3]  rounded-xl text-[white] font-bold ${selectedBackground} flex items-center justify-center`}
    >
      {text}
    </NavLink>
  );
};

const Filter = () => {
  return (
    <div className=" w-full h-[10%] flex items-center justify-center gap-4 ">
      <FilterButton text={"All Products"} filter={"all"} />
      <FilterButton text={"Available Now"} filter={"available"} />
    </div>
  );
};

export default Filter;
