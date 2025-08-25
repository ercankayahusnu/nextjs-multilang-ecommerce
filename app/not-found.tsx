// 404 için özel sayfa
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold">404 - Sayfa Bulunamadı</h1>
      <p className="text-gray-600 mt-4">
        Aradığınız sayfa mevcut değil veya kaldırılmış olabilir.
      </p>
    </div>
  );
}
