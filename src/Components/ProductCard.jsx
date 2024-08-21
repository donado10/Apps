import React from "react";
import {
  CoffeeImage,
  CoffeeName,
  CoffeePrice,
  CoffeeRating,
  CoffeeTendance,
} from "./ProductElements";

const ProductCard = ({ image, info, feedback, trend }) => {
  return (
    <div className="w-[17rem] aspect-[1/0.9] flex justify-between flex-col rounded-3xl relative self-center	justify-self-center">
      {image && image}
      {info && info}
      {feedback && feedback}
      {trend && trend}
    </div>
  );
};

export default ProductCard;

ProductCard.Image = CoffeeImage;
ProductCard.Name = CoffeeName;
ProductCard.Price = CoffeePrice;
ProductCard.Rating = CoffeeRating;
ProductCard.Tendance = CoffeeTendance;
