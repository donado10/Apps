import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useLocation } from "react-router-dom";

const data = {
  id: 1,
  name: "Cappuccino",
  image:
    "https://csyxkpbavpcrhwqhcpyy.supabase.co/storage/v1/object/public/assets/coffee-challenge/cappuccino.jpg",
  price: "$5.20",
  rating: 4.7,
  votes: 65,
  popular: true,
  available: true,
};

const Products = () => {
  const [products, setProducts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const location = useLocation();
  const filterParam = location.search.split("=")[1];
  useEffect(() => {
    fetch("http://localhost:5173/data/data.json")
      .then((res) => {
        return res.json();
      })
      .then(
        (products) => {
          if (filterParam === "all") {
            setProducts(products);
            setIsPending(false);
            return;
          } else {
            const availableProducts = products.filter(
              (product) => product.available === true
            );
            setProducts(availableProducts);
            setIsPending(false);
          }
        },
        [filterParam]
      );
  });

  return (
    <div className="w-full h-[100%] grid grid-cols-3  max-[1280px]:grid-cols-2 max-[800px]:grid-cols-1">
      {isPending ||
        products.map((data, i) => {
          return (
            <ProductCard
              key={i}
              image={<ProductCard.Image image={data.image} />}
              info={
                <div className="flex items-center justify-between">
                  <ProductCard.Name name={data.name} />
                  <ProductCard.Price price={data.price} />
                </div>
              }
              feedback={
                <ProductCard.Rating
                  isFill={data.rating ? true : false}
                  voteNumber={data.votes}
                  avarageNumber={data.rating}
                />
              }
              trend={data.popular ? <ProductCard.Tendance /> : null}
            />
          );
        })}
    </div>
  );
};

export default Products;
