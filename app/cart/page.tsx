// "use client";

// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "@/store/store";
// import { removeFromCart, updateQuantity } from "@/store/cartSlice";
// import Image from "next/image";
// import toast from "react-hot-toast";

// export default function CartPage() {
//   const cartItems = useSelector((state: RootState) => state.cart.items);
//   const dispatch = useDispatch();

//   if (cartItems.length === 0) {
//     return (
//       <div>
//         <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//         <p className="text-gray-600">Cart is currently empty 🛒</p>
//       </div>
//     );
//   }

//   const total = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
//       <div className="space-y-6">
//         {cartItems.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center gap-4 border-b pb-4 bg-white p-4 rounded-lg shadow-sm"
//           >
//             <Image
//               src={item.image}
//               alt={item.title}
//               width={80}
//               height={80}
//               className="object-contain"
//             />
//             <div className="flex-1">
//               <h2 className="font-semibold">{item.title}</h2>
//               <p className="text-gray-500">${item.price}</p>
//               <div className="flex items-center gap-2 mt-2">
//                 <button
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                   onClick={() =>
//                     dispatch(
//                       updateQuantity({
//                         id: item.id,
//                         quantity: Math.max(1, item.quantity - 1),
//                       })
//                     )
//                   }
//                 >
//                   -
//                 </button>
//                 <span>{item.quantity}</span>
//                 <button
//                   className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                   onClick={() =>
//                     dispatch(
//                       updateQuantity({
//                         id: item.id,
//                         quantity: item.quantity + 1,
//                       })
//                     )
//                   }
//                 >
//                   +
//                 </button>
//               </div>
//             </div>
//             <button
//               className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
//               onClick={() => {
//                 dispatch(removeFromCart(item.id));
//                 toast.error(`${item.title} removed from cart ❌`);
//               }}
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>
//       <div className="mt-6 text-right">
//         <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// }

"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeFromCart, updateQuantity, setCart } from "@/store/cartSlice";
import { useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  // Component mount olduğunda localStorage'dan sepeti yükle
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      dispatch(setCart(JSON.parse(savedCart)));
    }
  }, [dispatch]);

  if (cartItems.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p className="text-gray-600">Cart is currently empty</p>
      </div>
    );
  }

  // Toplam fiyat hesaplama
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border-b pb-4 bg-white p-4 rounded-lg shadow-sm"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={80}
              height={80}
              className="object-contain"
            />
            <div className="flex-1">
              <h2 className="font-semibold">{item.title}</h2>
              <p className="text-gray-500">${item.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
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
                <span>{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
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
            <button
              className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-600 transition"
              onClick={() => {
                dispatch(removeFromCart(item.id));
                toast.error(`${item.title} removed from cart`);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}
