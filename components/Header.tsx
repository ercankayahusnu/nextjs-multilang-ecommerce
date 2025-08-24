"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">E-Commerce</h1>
      <nav className="flex gap-6">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/products" className="hover:text-blue-600">
          Products
        </Link>
        <Link href="/cart" className="hover:text-blue-600">
          Cart
        </Link>
      </nav>
    </header>
  );
}
