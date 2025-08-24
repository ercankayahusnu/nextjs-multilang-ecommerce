import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Ürünler getirilemedi");

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-sm p-4 flex flex-col hover:shadow-md transition"
          >
            <Link href={`/products/${product.id}`} className="flex-1">
              <Image
                src={product.image}
                alt={product.title}
                width={200}
                height={200}
                className="object-contain h-48 w-full mb-4"
              />
              <h2 className="font-semibold text-lg line-clamp-2">
                {product.title}
              </h2>
              <p className="text-gray-500 text-sm mb-2 capitalize">
                {product.category}
              </p>
              <p className="text-blue-600 font-bold mb-4">${product.price}</p>
            </Link>
            <AddToCartButton product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
