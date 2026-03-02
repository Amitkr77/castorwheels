import React, { useState, useMemo } from "react";
import {
  Check,
  ChevronDown,
  Filter,
  ArrowRight,
  BadgeCheck,
  Weight,
  Settings2,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    title: "Heavy Duty Casters",
    description: "For high load industrial equipment.",
    features: ["500–2000 kg | Steel / PU", "Factories, Warehouses"],
    imageSrc:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDAALxV1NRRCK0nSN4WBNkLCPzokOeMqAw-q9VTtl1dxenVnMwf2G3Xd4_l98USz2QtZirXlkVKjT4W2_ESIivVx14i_N-DfsyAmoKMU-tYHbI2J9Vy4xCsaVC6x7aFU6l7CWNyM0o61Pe70fMcWyNsRxOoVKJJ2JiMNAZNKe0BLid3Nfw-xFENaNrPCdOBiekHFMbKgdvXR-QOTzYgMoNsFUEIb2pzOlENt2AvKDQOj17fBI_rJa3cA7sp0q6tRAXTHsB1_jyQ89o",
    alt: "Heavy Duty Caster",
    loadRange: "Heavy (500kg+)",
    wheelMaterial: ["Steel", "PU"],
    category: "heavyDuty",
    path: "heavy-duty",
  },

  {
    title: "Automotive Assembly Casters",
    description: "Designed for automotive assembly lines and production flow.",
    features: ["High precision | PU / Nylon", "Assembly Lines"],
    imageSrc: "/manufacture.png",
    alt: "Automotive Assembly Caster",
    
    loadRange: "Medium–Heavy",
    wheelMaterial: ["PU", "Nylon"],
    category: "automotiveAssembly",
    path: "automotive",
  },

  {
    title: "Furniture Casters",
    description: "Smooth rolling casters for furniture and interior use.",
    features: ["Quiet movement | Rubber", "Home & Office Furniture"],
    imageSrc: "/furniture_caster.png",
    alt: "Furniture Caster",
    loadRange: "Light–Medium",
    wheelMaterial: ["Rubber"],
    category: "furnitureCasters",
    path: "furniture-castors",
  },

  {
    title: "Medical Casters",
    description: "Hygienic and silent casters for medical environments.",
    features: ["Non-marking | Lockable", "Hospitals, Labs"],
    imageSrc: "/medical_caster.png",
    alt: "Medical Caster",
    loadRange: "Light–Medium",
    wheelMaterial: ["TPR", "PU"],
    category: "medicalCaster",
    path: "medical",
  },

  {
    title: "Warehouse & Logistics Casters",
    description: "Built for continuous movement and heavy warehouse use.",
    features: ["Shock resistant | PU / Nylon", "Logistics & Distribution"],
    imageSrc: "/warehouse_caster.png",
    alt: "Warehouse Logistics Caster",
    loadRange: "Medium–Heavy",
    wheelMaterial: ["PU", "Nylon"],
    category: "warehouseLogistics",
    path: "warehouse-castor",
  },

  {
    title: "Custom Caster Solutions",
    description: "Tailor-made caster solutions for unique requirements.",
    features: ["Custom load & size", "Special applications"],
    imageSrc: "/customCaster.png",
    alt: "Custom Caster Solution",
    loadRange: "Custom",
    wheelMaterial: ["Custom"],
    category: "customsolution",
    path: "custom-solution",
  },
];

export default function Solution() {
  const [loadFilter, setLoadFilter] = useState("Load Capacity");
  const [materialFilter, setMaterialFilter] = useState("Wheel Material");
  const [typeFilter, setTypeFilter] = useState("Wheel Type");

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchLoad =
        loadFilter === "Load Capacity" || p.loadRange?.includes(loadFilter);
      const matchMaterial =
        materialFilter === "Wheel Material" ||
        p.wheelMaterial?.some((m) => m.includes(materialFilter));
      // typeFilter not used yet — you can add logic later (swivel/fixed/braked)
      return matchLoad && matchMaterial;
    });
  }, [loadFilter, materialFilter /* , typeFilter */]);

  return (
    <section className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-100 transition-colors duration-300 min-h-screen">
      <header className="relative pt-20 pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Industrial warehouse background"
            className="w-full h-full object-cover "
            src="./hero-image/hero-image2.png"
          />
          <div className="absolute inset-0 bg-white/50 " />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Caster Wheel Categories
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore our wide range of caster wheels designed for different
            industries and load requirements.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 -mt-32 relative z-20 pb-20">
        {/* Filter Bar */}
        <div className="glass-effect rounded-xl shadow-lg p-4 mb-10 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-3 flex-1">
            <div className="relative flex-1 min-w-50">
              <select
                value={loadFilter}
                onChange={(e) => setLoadFilter(e.target.value)}
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary appearance-none cursor-pointer"
              >
                <option>Load Capacity</option>
                <option>Light (0-150kg)</option>
                <option>Medium (150-500kg)</option>
                <option>Heavy (500kg+)</option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
              />
            </div>

            <div className="relative flex-1 min-w-50">
              <select
                value={materialFilter}
                onChange={(e) => setMaterialFilter(e.target.value)}
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary appearance-none cursor-pointer"
              >
                <option>Wheel Material</option>
                <option>Polyurethane (PU)</option>
                <option>Nylon</option>
                <option>Rubber</option>
                <option>Steel</option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
              />
            </div>

            <div className="relative flex-1 min-w-50">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-primary focus:border-primary appearance-none cursor-pointer"
              >
                <option>Wheel Type</option>
                <option>Swivel</option>
                <option>Fixed</option>
                <option>Braked</option>
              </select>
              <ChevronDown
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"
              />
            </div>
          </div>

          
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length === 0 ? (
            <p className="h-48 w-auto object-contain mix-blend-multiply dark:mix-blend-normal">
              No products match the selected filters.
            </p>
          ) : (
            filteredProducts.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))
          )}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-10 text-slate-900 dark:text-white">
            Why Choose Our Casters?
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="flex flex-col items-center gap-3">
              <BadgeCheck size={40} className="text-primary" />
              <span className="font-medium">ISO Certified</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Weight size={40} className="text-primary" />
              <span className="font-medium">High Load Tested</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Settings2 size={40} className="text-primary" />
              <span className="font-medium">Custom Solutions</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Truck size={40} className="text-primary" />
              <span className="font-medium">Bulk & OEM Support</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-medium transition-colors inline-block mt-4"
          >
            Contact Our Experts
          </Link>
        </div>
      </main>
    </section>
  );
}

// Extracted reusable card
function ProductCard({ title, description, features, imageSrc, alt, path }) {
  return (
    <div className="product-card glass-effect rounded-2xl p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
      
      {/* Image Container */}
      <div className="relative bg-white/50 dark:bg-slate-900/50 rounded-xl mb-6 h-52 overflow-hidden">
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal"
        />
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>

      <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">
        {description}
      </p>

      <ul className="space-y-2 mb-8 grow">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center text-sm gap-2">
            <Check size={18} className="text-primary shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to={`/solution/${path}`}
        className="mt-auto inline-flex items-center gap-2 text-primary font-medium hover:underline"
      >
        view details
      </Link>
    </div>
  );
}

