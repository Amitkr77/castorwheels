import React, { useState, useMemo, useEffect, useCallback } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdFitness } from "react-icons/io";

import {
  MdGridView,
  MdViewList,
  MdDonutLarge,
  MdOutlineChevronRight,
  MdExpandMore,
} from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
import { heavyDuty, heavyDutyContent } from "../../data/Products/Heavy_duty"; 

// ────────────────────────────────────────────────
export default function HeavyDuty() {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get("q") || "";

  const [search, setSearch] = useState(initialSearch);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [loadRange, setLoadRange] = useState({ min: "", max: "" });
  const [viewMode, setViewMode] = useState("grid");
  const [sortBy, setSortBy] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedMaterials, loadRange, sortBy]);

  const resetFilters = useCallback(() => {
    setSelectedMaterials([]);
    setLoadRange({ min: "", max: "" });
    setSearch("");
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...heavyDuty];

    // Search by name or code
    if (search.trim()) {
      const term = search.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.code.toLowerCase().includes(term),
      );
    }

    // Materials filter
    if (selectedMaterials.length > 0) {
      result = result.filter((p) =>
        selectedMaterials.some((m) => p.wheel_material.includes(m)),
      );
    }

    // Load range
    const min = loadRange.min ? Number(loadRange.min) : -Infinity;
    const max = loadRange.max ? Number(loadRange.max) : Infinity;
    if (Number.isFinite(min) || Number.isFinite(max)) {
      result = result.filter(
        (p) => p.load_capacity_kg >= min && p.load_capacity_kg <= max,
      );
    }

    // Sorting
    if (sortBy === "name-asc") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "name-desc") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === "load-desc") {
      result.sort((a, b) => b.load_capacity_kg - a.load_capacity_kg);
    }

    return result;
  }, [search, selectedMaterials, loadRange, sortBy]);

  const totalItems = filteredAndSortedProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, totalItems);

  const paginatedProducts = useMemo(
    () =>
      filteredAndSortedProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
      ),
    [filteredAndSortedProducts, currentPage],
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };
    if (selectedProduct) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [selectedProduct]);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-slate-400">
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Home
            </a>
            <MdOutlineChevronRight className="text-lg" aria-hidden="true" />
            <span className="font-medium text-gray-900 dark:text-white">
              Castor Catalog
            </span>
            <MdOutlineChevronRight className="text-lg" aria-hidden="true" />
            <span className="font-medium text-gray-900 dark:text-white">
              Heavy Duty / Ultra Heavy
            </span>
          </nav>

          <h1 className="mt-4 text-3xl font-black tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {heavyDutyContent.title}
          </h1>
          <p className="mt-3 text-base text-gray-600 dark:text-slate-400 max-w-3xl">
            {heavyDutyContent.description}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl grow px-4 py-8 sm:px-6 lg:flex lg:gap-8 lg:px-8">
        {/* Filters Sidebar */}
        <aside className="hidden lg:block lg:w-72 lg:shrink-0">
          <div className="sticky top-24 rounded-xl bg-white dark:bg-slate-900 p-6 shadow-sm border border-gray-200 dark:border-slate-800">
            <div className="flex items-center justify-between pb-5 border-b dark:border-slate-700">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                Filters
              </h3>
              <button
                onClick={resetFilters}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
              >
                Clear all
              </button>
            </div>

            {/* Wheel Material – matches actual values in heavyDuty data */}
            <section className="mt-6">
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-3">
                Wheel Material
              </h4>
              {[
                "Forged Steel / Cast Steel",
                "Cast Iron",
                "Cast Iron Core + Polyurethane Tread",
                "Forged Steel",
                "High-Strength Polyamide (PA)",
                "Solid Rubber / PU-Elastic",
                "Elastic PU with Cast Iron Core",
              ].map((mat) => (
                <label
                  key={mat}
                  className="flex items-center gap-3 py-1.5 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(mat)}
                    onChange={() =>
                      setSelectedMaterials((prev) =>
                        prev.includes(mat)
                          ? prev.filter((m) => m !== mat)
                          : [...prev, mat],
                      )
                    }
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600"
                  />
                  <span className="text-sm text-gray-700 dark:text-slate-300 group-hover:text-blue-600">
                    {mat}
                  </span>
                </label>
              ))}
            </section>

            <hr className="my-6 border-gray-200 dark:border-slate-700" />

            {/* Load Capacity */}
            <section>
              <h4 className="text-sm font-bold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-3">
                Load Capacity (kg)
              </h4>
              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min={0}
                  placeholder="Min"
                  value={loadRange.min}
                  onChange={(e) =>
                    setLoadRange((p) => ({ ...p, min: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                />
                <span className="text-gray-400 dark:text-slate-500">–</span>
                <input
                  type="number"
                  min={0}
                  placeholder="Max"
                  value={loadRange.max}
                  onChange={(e) =>
                    setLoadRange((p) => ({ ...p, max: e.target.value }))
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-slate-800 dark:border-slate-600 dark:text-white"
                />
              </div>
            </section>
          </div>
        </aside>

        {/* Products Area */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Search */}
          <div className="relative">
            <IoSearchSharp
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-slate-500 text-xl pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search by name or code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-white pl-11 pr-4 py-3 text-gray-900 placeholder-gray-500 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-slate-900 dark:border-slate-700 dark:text-white dark:placeholder-slate-500"
            />
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b pb-6 dark:border-slate-700">
            <p className="text-sm text-gray-600 dark:text-slate-400">
              Showing{" "}
              <strong className="text-gray-900 dark:text-white">
                {startItem}–{endItem}
              </strong>{" "}
              of{" "}
              <strong className="text-gray-900 dark:text-white">
                {totalItems}
              </strong>{" "}
              products
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-2">
                <label className="text-sm text-gray-600 dark:text-slate-400 whitespace-nowrap">
                  Sort by
                </label>
                <div className="relative inline-block">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none rounded-lg bg-white py-2 pl-3 pr-9 text-sm font-medium text-gray-900 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:bg-slate-900 dark:text-white dark:border-slate-700"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="name-asc">Name A–Z</option>
                    <option value="name-desc">Name Z–A</option>
                    <option value="load-desc">Load High to Low</option>
                  </select>
                  <MdExpandMore
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <div className="flex rounded-lg bg-gray-100 p-1 dark:bg-slate-800">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                  className={`rounded p-2.5 transition-colors ${viewMode === "grid" ? "bg-white shadow dark:bg-slate-700" : "hover:bg-gray-200 dark:hover:bg-slate-700"}`}
                >
                  <MdGridView className="text-xl" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                  className={`rounded p-2.5 transition-colors ${viewMode === "list" ? "bg-white shadow dark:bg-slate-700" : "hover:bg-gray-200 dark:hover:bg-slate-700"}`}
                >
                  <MdViewList className="text-xl" />
                </button>
              </div>
            </div>
          </div>

          {/* Products Grid/List */}
          {totalItems === 0 ? (
            <div className="py-16 text-center text-gray-500 dark:text-slate-400">
              No heavy-duty castors match your current filters.
              <button
                onClick={resetFilters}
                className="ml-2 text-blue-600 hover:underline dark:text-blue-400"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                  : "flex flex-col gap-5"
              }
            >
              {paginatedProducts.map((product) => (
                <ProductCard
                  key={product.code}
                  product={product}
                  viewMode={viewMode}
                  onViewDetails={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav
              aria-label="Pagination"
              className="mt-10 flex items-center justify-center gap-2 flex-wrap"
            >
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <FaChevronLeft className="text-sm" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(
                  (page) =>
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 2 && page <= currentPage + 2),
                )
                .map((page, idx, arr) => {
                  const showEllipsisBefore =
                    idx > 0 && arr[idx - 1] !== page - 1 && page !== 1;
                  const showEllipsisAfter =
                    idx < arr.length - 1 &&
                    arr[idx + 1] !== page + 1 &&
                    page !== totalPages;

                  return (
                    <React.Fragment key={page}>
                      {showEllipsisBefore && (
                        <span className="flex h-10 w-10 items-center justify-center text-gray-400">
                          …
                        </span>
                      )}
                      <button
                        onClick={() => goToPage(page)}
                        aria-label={`Page ${page}`}
                        className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-medium transition-colors ${
                          page === currentPage
                            ? "border-blue-600 bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:border-blue-500 dark:text-blue-400"
                            : "border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                        }`}
                      >
                        {page}
                      </button>
                      {showEllipsisAfter && (
                        <span className="flex h-10 w-10 items-center justify-center text-gray-400">
                          …
                        </span>
                      )}
                    </React.Fragment>
                  );
                })}

              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </nav>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProduct(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              ✕
            </button>

            <div className="p-6 md:p-10">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                  {selectedProduct.name}
                </h2>
                {selectedProduct.badge && (
                  <span
                    className={`inline-block px-3 py-1 text-xs font-bold uppercase rounded-full text-white ${
                      selectedProduct.badge === "top-seller"
                        ? "bg-blue-600"
                        : "bg-green-600"
                    }`}
                  >
                    {selectedProduct.badge.replace("-", " ")}
                  </span>
                )}
              </div>

              <div className="mt-8 grid gap-10 md:grid-cols-2">
                {/* Image */}
                <div className="flex items-center justify-center bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden aspect-square">
                  {selectedProduct.image ? (
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <div className="text-gray-400 dark:text-slate-500 text-center p-12">
                      Image not available
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <dl className="grid grid-cols-2 gap-5">
                    <div>
                      <dt className="text-sm text-gray-500 dark:text-slate-400">
                        Load Capacity
                      </dt>
                      <dd className="mt-1 text-xl font-semibold">
                        {selectedProduct.load_capacity_kg} kg
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500 dark:text-slate-400">
                        Wheel Diameter
                      </dt>
                      <dd className="mt-1 text-xl font-semibold">
                        {selectedProduct.wheel_diameter_mm} mm
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500 dark:text-slate-400">
                        Material
                      </dt>
                      <dd className="mt-1 text-xl font-semibold">
                        {selectedProduct.wheel_material}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500 dark:text-slate-400">
                        Height
                      </dt>
                      <dd className="mt-1 text-xl font-semibold">
                        {selectedProduct.height_mm} mm
                      </dd>
                    </div>
                  </dl>

                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      Ideal for
                    </h3>
                    <p className="mt-2 text-gray-700 dark:text-slate-300">
                      {selectedProduct.ideal_for}
                    </p>
                  </div>

                  {selectedProduct.key_features.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        Key Features
                      </h3>
                      <ul className="mt-3 space-y-2 pl-5 list-disc text-gray-700 dark:text-slate-300">
                        {selectedProduct.key_features.map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-end">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-8 py-3 rounded-xl border border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
                <button className="px-8 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
                  Inquire Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// ────────────────────────────────────────────────
function ProductCard({ product, viewMode, onViewDetails }) {
  const isList = viewMode === "list";

  return (
    <article
      className={`group relative flex overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-md hover:border-gray-300 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600 ${
        isList ? "flex-row items-center gap-6 p-5" : "flex-col"
      }`}
    >
      {product.badge && (
        <div className="absolute top-3 left-3 z-10">
          <span
            className={`inline-block px-2.5 py-1 text-xs font-bold uppercase rounded-md text-white ${
              product.badge === "top-seller" ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            {product.badge.replace("-", " ")}
          </span>
        </div>
      )}

      <div
        className={`relative overflow-hidden bg-white dark:bg-slate-800 ${
          isList
            ? "h-36 w-36 shrink-0 rounded-lg"
            : "aspect-square rounded-t-xl"
        }`}
      >
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className={`h-full w-full object-contain transition-transform duration-300 group-hover:scale-105 ${
              isList ? "p-3" : ""
            }`}
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-gray-400 dark:text-slate-500 text-sm">
            No image
          </div>
        )}
      </div>

      <div className={`flex flex-1 flex-col p-5 ${isList ? "p-0 pr-5" : ""}`}>
        <div className="text-xs text-gray-500 dark:text-slate-400">
          {product.code}
        </div>

        <h3
          className={`font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
            isList ? "text-xl mt-1" : "text-lg mb-1.5"
          }`}
        >
          {product.name}
        </h3>

        <div
          className={`flex flex-wrap gap-2.5 text-sm mb-4 ${isList ? "mt-2" : "mt-1"}`}
        >
          <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 dark:bg-slate-800">
            <IoMdFitness className="text-gray-500 dark:text-slate-400" />
            <span className="font-medium">{product.load_capacity_kg} kg</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 dark:bg-slate-800">
            <MdDonutLarge className="text-gray-500 dark:text-slate-400" />
            <span className="font-medium">{product.wheel_diameter_mm} mm</span>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 dark:bg-slate-800">
            <span className="text-gray-500 dark:text-slate-400">Mat:</span>
            <span className="font-medium">{product.wheel_material}</span>
          </div>
        </div>

        <div className="mt-auto flex gap-3 pt-4 border-t border-gray-200 dark:border-slate-700">
          <button
            onClick={onViewDetails}
            className="flex-1 rounded-lg border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-950/40 transition-colors"
          >
            View Details
          </button>
          <button className="flex-1 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
            Inquire
          </button>
        </div>
      </div>
    </article>
  );
}
