"use client";

import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import React from "react";

function ProductCardComponent({ product }: { product: any }) {
  return (
    <div className="border rounded-lg shadow-sm p-4 flex flex-col hover:shadow-md transition">
      <Link href={`/products/${product.id}`} className="flex-1">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          priority
          className="object-contain h-48 w-full mb-4"
        />
        <h2 className="font-semibold text-lg line-clamp-2">{product.title}</h2>
        <p className="text-gray-500 text-sm mb-2 capitalize">
          {product.category}
        </p>
        <p className="text-blue-600 font-bold mb-4">${product.price}</p>
      </Link>
      <AddToCartButton product={product} />
    </div>
  );
}

const ProductCard = React.memo(ProductCardComponent);
export default ProductCard;
