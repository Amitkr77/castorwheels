"use client";
import React from "react";
import {
  MdArrowForward,
  MdEco,
  MdVerifiedUser,
  MdFactory,
  MdLocalShipping,
  MdLocalHospital,
  MdStore,
  MdDirectionsCar,
  MdHotel,
  MdBuild,
  MdFlightTakeoff,
} from "react-icons/md";
import EnquiryForm from "../components/EnquiryForm";

const industries = [
  {
    title: "Manufacturing & Industrial Production",
    icon: <MdFactory className="text-5xl" />,
    teaser: "High-load, high-durability castors for assembly lines & machinery",
  },
  {
    title: "Warehousing & Logistics",
    icon: <MdLocalShipping className="text-5xl" />,
    teaser: "Smooth-rolling, floor-protecting solutions for pallet trucks & carts",
  },
  {
    title: "Healthcare & Medical Equipment",
    icon: <MdLocalHospital className="text-5xl" />,
    teaser: "Quiet, non-marking, hygienic castors for beds & equipment",
  },
  {
    title: "Retail & Commercial Infrastructure",
    icon: <MdStore className="text-5xl" />,
    teaser: "Reliable mobility for shelving, displays & service counters",
  },
  {
    title: "Automotive & Tooling Systems",
    icon: <MdDirectionsCar className="text-5xl" />,
    teaser: "Ergonomic, heavy-duty castors for jigs, dies & assembly trolleys",
  },
  {
    title: "Hospitality & Institutional Furniture",
    icon: <MdHotel className="text-5xl" />,
    teaser: "Aesthetic, silent castors for chairs, tables & service carts",
  },
  {
    title: "OEMs & Project-Based Applications",
    icon: <MdBuild className="text-5xl" />,
    teaser: "Custom-engineered solutions for specialized machinery",
  },
  {
    title: "Aerospace, Defense & Heavy Engineering",
    icon: <MdFlightTakeoff className="text-5xl" />,
    teaser: "Extreme-load, precision castors for GSE & heavy-duty platforms",
  },
];

export default function WhatWeDo() {
  return (
    <div className="bg-gray-50 text-gray-900 font-display min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-20 text-center"
        style={{
          backgroundImage: `url('./WhatWeDo.png')`, // Replace with better hero image if available
        }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/80 to-black/90"
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">
          <h1 className="text-white text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight drop-shadow-xl">
            Precision Mobility
            <br className="hidden md:block" /> Engineered for Performance
          </h1>

          <p className="text-gray-200 text-xl lg:text-2xl font-light max-w-4xl opacity-95">
            High-performance caster wheels and mobility systems designed for
            reliability, efficiency, and longevity across demanding industrial
            environments.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <a
              href="/request-info"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] transition-all duration-300"
            >
              Get a Quote
              <MdArrowForward className="text-xl group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/solution"
              className="inline-flex items-center px-10 py-5 border-2 border-white/70 text-white font-semibold text-lg rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>


      {/* Core Offerings */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16">
            What We Engineer
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "Light Duty Casters",
                desc: "Ideal for furniture, office equipment, displays and low-load applications requiring smooth, quiet movement.",
              },
              {
                title: "Medium Duty Casters",
                desc: "Reliable performance for carts, racks, workstations and moderate industrial use.",
              },
              {
                title: "Heavy Duty & Industrial Casters",
                desc: "Built for manufacturing floors, logistics, material handling — high load capacity and extreme durability.",
              },
              {
                title: "Medical & Specialty Casters",
                desc: "Precision, hygiene, safety-focused solutions for healthcare, labs and sensitive environments.",
              },
              {
                title: "Custom Mobility Solutions",
                desc: "Tailored designs engineered to exact specifications, load conditions, floor types and operational needs.",
              },
              {
                title: "High-Performance Polyurethane & Rubber Wheels",
                desc: "designed for low noise, floor protection, and long service life.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto">
            Every product is engineered with a focus on{" "}
            <strong>load performance</strong>, <strong>smooth rolling</strong>,{" "}
            <strong>noise reduction</strong>, and{" "}
            <strong>exceptional service life</strong>.
          </p>
        </div>
      </section>

      {/* Engineering & Quality */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Engineering & Quality Excellence
            </h2>
            <p className="text-xl font-medium text-blue-600">
              Designed with Precision. Built to Last.
            </p>

            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Engineering is the backbone of Casters Global. Our disciplined
                process includes:
              </p>
              <ul className="space-y-3 list-disc pl-6">
                <li>
                  Material selection optimized for application stress and
                  environment
                </li>
                <li>
                  Structural design for ideal load distribution and fatigue
                  resistance
                </li>
                <li>Precision CNC machining and controlled assembly</li>
                <li>
                  Rigorous in-house testing — load, endurance, swivel, rolling
                  resistance
                </li>
              </ul>
              <p className="font-medium">
                Strict quality protocols ensure consistency, reliability, and
                compliance with international standards — delivering products
                that perform reliably throughout their lifecycle.
              </p>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 lg:aspect-auto order-1 lg:order-2 group border border-gray-200">
            <img
              src="./side_image2.png"
              alt="Precision engineering and quality control"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-4/3 lg:aspect-auto order-2 lg:order-1 group border border-gray-200">
            <img
              src="./side_image-1.png"
              alt="Sustainable manufacturing practices"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
          </div>

          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Commitment to Sustainability
            </h2>
            <p className="text-xl font-medium text-blue-600">
              Responsible Manufacturing for a Moving World
            </p>

            <div className="space-y-6 text-lg text-gray-700">
              <p>
                Sustainability is embedded in our operations — from material
                choices to production processes and product longevity.
              </p>
              <ul className="space-y-3 list-disc pl-6">
                <li>
                  Use of recyclable and eco-friendly materials wherever feasible
                </li>
                <li>Energy-efficient manufacturing technologies</li>
                <li>Waste minimization and material recycling programs</li>
                <li>
                  Long-life designs that reduce replacement frequency and
                  environmental footprint
                </li>
              </ul>
              <p className="font-medium">
                We help customers achieve both high performance and
                environmental responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-gray-900 tracking-tight mb-12 md:mb-16">
            Industries We Empower
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {industries.map((industry, i) => (
              <div
                key={i}
                className={`
                  group relative bg-white 
                  rounded-2xl md:rounded-3xl p-6 md:p-8 
                  border border-gray-200 
                  text-center shadow-sm hover:shadow-xl 
                  transition-all duration-300 ease-out
                  hover:-translate-y-2 hover:border-blue-500/50
                  hover:scale-[1.02] overflow-hidden
                `}
              >
                <div className="text-blue-600 mb-5 transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300">
                  {industry.icon}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 tracking-tight">
                  {industry.title}
                </h3>

                <p className="text-gray-600 text-base leading-relaxed">
                  {industry.teaser}
                </p>
              </div>
            ))}
          </div>

          {/* Real-world images */}
          <div className="mt-16 md:mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              Real-World Mobility in Action
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://www.infordcaster.com/wp-content/uploads/2022/09/Heavy-duty.jpg"
                  alt="Heavy-duty castors in industrial manufacturing environment"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://www.douglasequipment.com/wp-content/uploads/2017/09/Heavy-Duty-2.jpg"
                  alt="Industrial heavy-duty caster wheels close-up"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://m.media-amazon.com/images/I/61d7CvcK3YL._AC_UF894,1000_QL80_.jpg"
                  alt="Hospital bed equipped with medical castors"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://www.raymondcorp.com/-/media/raymond/trucks/pallet-truck-8510/features-carousel-767x538/767x538_8510_smooth_control.jpg"
                  alt="Electric rider pallet jack with heavy-duty castors in warehouse"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <img
                  src="https://darcor.com/wp-content/uploads/2017/09/automotive-manufacturing-industrial-ergonomics.jpg"
                  alt="Automotive assembly line carts with industrial castors"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          <p className="mt-12 md:mt-16 text-center text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From high-precision cleanrooms to heavy-duty outdoor yards — we
            engineer mobility that performs reliably under your specific
            conditions.
          </p>
        </div>
      </section>

      {/* Custom Solutions & Approach */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Custom Solutions & Technical Support
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond catalog products, we provide full custom engineering —
              collaborating closely on load conditions, floor surfaces, movement
              patterns, safety, and environmental factors to create optimized
              caster solutions.
            </p>
            <p className="mt-6 text-lg font-medium text-gray-800">
              Our technical team offers application guidance to ensure the right
              product for maximum efficiency and uptime.
            </p>
          </div>

          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Our Approach
            </h2>
            <ul className="space-y-6 text-lg text-gray-700">
              <li className="flex items-start gap-4">
                <MdVerifiedUser className="text-3xl text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-xl text-gray-900">
                    Customer-Centric Engineering
                  </strong>
                  Solutions built around real operational needs
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MdFactory className="text-3xl text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-xl text-gray-900">
                    Consistency & Reliability
                  </strong>
                  Repeatable quality in every batch
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MdEco className="text-3xl text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <strong className="block text-xl text-gray-900">
                    Continuous Improvement
                  </strong>
                  Ongoing advancement in technology, processes, and materials
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <EnquiryForm />
    </div>
  );
}