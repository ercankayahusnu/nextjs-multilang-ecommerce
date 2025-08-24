import Image from "next/image";
import AddToCartButton from "@/components/AddToCartButton";

// Tek ürün getir
async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error("Ürün getirilemedi");

  return res.json();
}

// Dinamik metadata
export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return {
    title: `${product.title} | Next.js E-Commerce`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Görsel */}
        <div className="flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            priority
            className="object-contain w-full h-[400px] rounded-lg shadow-md bg-white p-4"
          />
        </div>

        {/* Bilgiler */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            {product.category}
          </p>
          <p className="text-2xl font-semibold text-blue-600">
            ${product.price}
          </p>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
