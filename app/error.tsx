"use client";

// 500 hataları için Error Boundary
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-3xl font-bold text-red-600">Bir hata oluştu!</h1>
      <p className="mt-4 text-gray-700">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Tekrar Dene
      </button>
    </div>
  );
}
