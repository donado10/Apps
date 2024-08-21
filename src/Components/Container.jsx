import React from "react";
import Header from "./Header";
import Filter from "./Filter";
import Products from "./Products";

const Container = () => {
  return (
    <div className="w-4/5 h-fit bg-[#1B1D1F] rounded-xl flex items-center flex-col gap-8 p-8 mt-40 mb-40">
      <Header />
      <Filter />
      <Products />
    </div>
  );
};

export default Container;
