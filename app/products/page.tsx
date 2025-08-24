"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";

// API'den ürünleri çek
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Ürünler getirilemedi");
  return res.json();
}

export default function ProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [category, setCategory] = useState<string>("all");
  const [sort, setSort] = useState<string>("none");
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setFiltered(data);
    });
  }, []);

  // Filtreleme & sıralama
  useEffect(() => {
    let temp = [...products];

    // Kategori
    if (category !== "all") {
      temp = temp.filter((p) => p.category === category);
    }

    // Fiyat aralığı
    temp = temp.filter((p) => p.price >= minPrice && p.price <= maxPrice);

    // Sıralama
    if (sort === "asc") {
      temp.sort((a, b) => a.price - b.price);
    } else if (sort === "desc") {
      temp.sort((a, b) => b.price - a.price);
    }

    setFiltered(temp);
  }, [category, sort, minPrice, maxPrice, products]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>

      {/* Filtre ve sıralama paneli */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        {/* Kategori */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="all">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>

        {/* Fiyat aralığı */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="border rounded px-2 py-1 w-24"
            placeholder="Min"
          />
          <span>-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="border rounded px-2 py-1 w-24"
            placeholder="Max"
          />
        </div>

        {/* Sıralama */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="none">Sort By</option>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>

      {/* Grid ürün listesi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
