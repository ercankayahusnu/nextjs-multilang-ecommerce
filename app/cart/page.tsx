"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart, updateQuantity } from "@/store/cartSlice";
import Image from "next/image";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">Sepet şu an boş 🛒</p>
      </div>
    );
  }

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-6 bg-white p-4 rounded-lg shadow-sm border"
          >
            {/* Ürün görseli */}
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="object-contain"
            />

            {/* Ürün bilgileri */}
            <div className="flex-1">
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-gray-500">${item.price}</p>

              {/* Adet güncelleme */}
              <div className="flex items-center gap-2 mt-3">
                <button
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: Math.max(1, item.quantity - 1),
                      })
                    )
                  }
                >
                  -
                </button>
                <span className="px-3 font-medium">{item.quantity}</span>
                <button
                  className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                  onClick={() =>
                    dispatch(
                      updateQuantity({
                        id: item.id,
                        quantity: item.quantity + 1,
                      })
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>

            {/* Remove butonu */}
            <button
              className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Toplam */}
      <div className="mt-8 text-right">
        <p className="text-2xl font-bold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}
