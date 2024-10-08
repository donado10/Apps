import React, { useEffect, useState } from "react";
import AddCartLogo from "@/assets/images/icon-add-to-cart.svg";
import IncrementQuantity from "@/assets/images/icon-increment-quantity.svg";
import DecrementQuantity from "@/assets/images/icon-decrement-quantity.svg";

import { useProductCardContext } from "./ProductContext";
import { useOrderContext } from "../Order/OrderContext";
import useMediaQuery from "@/Hooks/useMediaQuery";
import { MediaQuery } from "@/Shared/enum";

export const ProductImage: React.FC = () => {
  const productCtx = useProductCardContext();
  const cartCtx = useOrderContext();
  const isBig = useMediaQuery(MediaQuery.BIG);
  const isSmall = useMediaQuery(MediaQuery.SMALL);
  const isMobile = useMediaQuery(MediaQuery.MOBILE);

  const handleSelectStyle = cartCtx?.list?.some(
    (order) => order.name === productCtx?.name,
  )
    ? "border-[3px] border-red-custom"
    : "";

  return (
    <>
      {isMobile && !isSmall && !isBig && (
        <div
          className={`aspect-[1/0.6] w-full overflow-hidden rounded-lg ${handleSelectStyle}`}
        >
          <img
            className={`h-full w-full`}
            src={productCtx?.image.mobile}
            alt=""
          />
        </div>
      )}
      {isSmall && !isBig && (
        <div
          className={`aspect-square w-52 overflow-hidden rounded-lg ${handleSelectStyle}`}
        >
          <img
            className={`h-full w-full`}
            src={productCtx?.image.tablet}
            alt=""
          />
        </div>
      )}
      {isBig && (
        <div
          className={`aspect-square w-56 overflow-hidden rounded-lg ${handleSelectStyle}`}
        >
          <img
            className={`h-full w-full`}
            src={productCtx?.image.desktop}
            alt=""
          />
        </div>
      )}
    </>
  );
};

export const ProductName: React.FC = () => {
  const productCtx = useProductCardContext();

  return <h2 className="text-xs text-rose-500">{productCtx?.name}</h2>;
};

export const ProductCategory: React.FC = () => {
  const productCtx = useProductCardContext();
  return (
    <h1 className="text-base font-semibold text-rose-900">
      {productCtx?.category}
    </h1>
  );
};

export const ProductPrice: React.FC = () => {
  const productCtx = useProductCardContext();

  return (
    <h2 className="text-base font-semibold text-red-custom">
      ${productCtx?.price.toFixed(2)}
    </h2>
  );
};

export const ProductAddCartBtn = () => {
  const productCtx = useProductCardContext()!;
  const cartCtx = useOrderContext();

  return (
    <button
      onClick={() => {
        cartCtx?.addOrder({
          name: productCtx?.name,
          amount: 1,
          unit_price: productCtx?.price,
          price: productCtx?.price * 1,
          thumbnail: productCtx.image.thumbnail,
        });
      }}
      className="flex w-40 items-center justify-center gap-4 rounded-l-3xl rounded-r-3xl border-[1px] border-rose-400 bg-white py-2"
    >
      <span>
        <img src={AddCartLogo} alt="" />
      </span>
      <span className="text-sm font-semibold">Add to Cart</span>
    </button>
  );
};

export const ProductEditQuantityBtn = () => {
  const productCtx = useProductCardContext()!;
  const cartCtx = useOrderContext()!;

  const [value, setValue] = useState<number>(1);

  useEffect(() => {
    if (value <= 0) {
      cartCtx.deleteOrder(productCtx.name);
    }
    const order = cartCtx.list!.find((order) => order.name === productCtx.name);
    order!.amount = value;
    order!.price = value * order!.unit_price;

    cartCtx.updateOrder(order!, productCtx.name);
    return;
  }, [value]);

  return (
    <div className="flex w-40 items-center justify-between gap-4 rounded-l-3xl rounded-r-3xl bg-red-custom px-2 py-2 text-white">
      <button
        onClick={() => {
          if (value < 0) {
            return;
          }
          setValue(value - 1);
        }}
        className="flex aspect-square w-4 items-center justify-center rounded-full border-[1px] border-white"
      >
        <img src={DecrementQuantity} alt="" />
      </button>
      <span className="text-sm font-semibold">{value >= 0 ? value : 0}</span>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
        className="flex aspect-square w-4 items-center justify-center rounded-full border-[1px] border-white"
      >
        <img src={IncrementQuantity} alt="" />
      </button>
    </div>
  );
};
