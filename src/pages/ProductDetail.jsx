// src/pages/ProductDetail.jsx
import { useParams, Navigate } from "react-router-dom";
import products from "../data/product";

export default function ProductDetail() {
  const { slug } = useParams();

  const product = products?.find((p) => p.slug === slug);
  console.log("product data:",product);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  return (
    <main className="max-w-[1280px] mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        Home / Shop / <span className="text-gray-900">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="rounded-xl border p-6 bg-white">
          <img
            src={product.media.mainImage}
            alt={product.name}
            className="w-full object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-extrabold mb-3">{product.name}</h1>

          <p className="text-sm text-gray-500 mb-4">
            SKU: {product.id} • {product.series}
          </p>

          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Spec
              label="Load Capacity"
              value={`${product.highlights.loadCapacityKg} kg`}
            />
            <Spec
              label="Wheel Diameter"
              value={`${product.highlights.wheelDiameterMm} mm`}
            />
            <Spec label="Bearing" value={product.highlights.bearing} />
            <Spec label="Material" value={product.highlights.material} />
          </div>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold">
            Request Information
          </button>
        </div>
      </div>

      {/* Technical Specifications */}
      <section className="mt-16">
        <h2 className="text-xl font-bold mb-6">Technical Specifications</h2>

        <div className="border rounded-xl overflow-hidden">
          {Object.entries(product.technicalSpecifications).map(
            ([key, value], index) => (
              <div
                key={key}
                className={`flex justify-between px-6 py-4 text-sm ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <span className="text-gray-500 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </span>
                <span className="font-medium">{value}</span>
              </div>
            ),
          )}
        </div>
      </section>
    </main>
  );
}

function Spec({ label, value }) {
  return (
    <div className="border rounded-lg p-4">
      <p className="text-xs text-gray-500 uppercase">{label}</p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}
