"use client";

import { useDispatch } from "react-redux";
import { addToCart } from "@/store/cartSlice";
import toast from "react-hot-toast";
import React from "react";

function AddToCartButtonComponent({ product }: { product: any }) {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => {
        dispatch(
          addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            quantity: 1,
          })
        );
        toast.success(`"${product.title}" added to cart  ✅`);
      }}
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Add to Cart
    </button>
  );
}

const AddToCartButton = React.memo(AddToCartButtonComponent);
export default AddToCartButton;
