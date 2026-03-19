import React from "react";
import {
  MdPrecisionManufacturing,
  MdTrendingUp,
  MdShield,
} from "react-icons/md";
import EnquiryForm from "../components/EnquiryForm";
import { Link } from "react-router-dom";
import AboutCarousel from "../components/AboutCarousel";
import AboutHero from "../components/AboutHero";

const principles = [
  {
    icon: MdPrecisionManufacturing,
    color: "blue",
    title: "Precision",
    description:
      "Every component is engineered with exacting tolerances to perform exactly as intended — zero compromise on accuracy and fit.",
  },
  {
    icon: MdShield,
    color: "indigo",
    title: "Reliability",
    description:
      "Built to deliver consistent, long-term performance — earning trust through proven durability and dependable partnerships.",
  },
  {
    icon: MdTrendingUp,
    color: "teal",
    title: "Progress",
    description:
      "Constant evolution in materials, technology, manufacturing processes, sustainability practices, and customer experience.",
  },
];

export default function About() {
  return (
    <div className="bg-gray-50 text-[#0d131b] font-display overflow-x-hidden">
      <AboutCarousel />

      {/* Stats */}
      <div className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10 lg:py-14">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-10 text-center">
            {[
              { num: "500+", label: "Product Variants" },
              { num: "5+", label: "years Experience" },
              { num: "2.5L+", label: "Units Shipped" },
              { num: "ISO", label: "9001:2015 Certified" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <p className="text-blue-600 text-4xl sm:text-5xl font-black">
                  {item.num}
                </p>
                <p className="text-slate-500 font-medium text-sm sm:text-base">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Who We Are
            </h2>
            <div className="mt-4 inline-block h-1 w-24 bg-linear-to-r from-blue-500 to-blue-700 rounded-full"></div>
          </div>

          <div className="text-lg prose prose-lg md:prose-xl prose-slate mx-auto max-w-7xl text-center lg:text-justify">
            <p className="leading-relaxed text-gray-700">
              <strong className="text-blue-600 font-semibold">
                Casters Global
              </strong>{" "}
              is a forward-thinking Indian manufacturer specializing in
              high-performance caster wheels and advanced mobility solutions.
            </p>

            <p className="leading-relaxed text-gray-700">
              We bring together precision engineering, modern manufacturing
              processes, and deep application knowledge to create caster
              products that deliver exceptional durability, smooth operation,
              and long service life — even in the most demanding industrial
              environments.
            </p>

            <p className="leading-relaxed text-gray-700">
              Whether it's light-duty furniture castors, medium-duty medical
              equipment wheels, or extreme heavy-duty industrial castors capable
              of handling several tons,{" "}
              <strong>customization is at the heart of what we do</strong>.
            </p>

            <p className="leading-relaxed text-gray-700 font-medium">
              Serving clients across India and international markets, our
              single-minded goal is clear:
              <span className="text-blue-600">
                {" "}
                to become the most trusted and reliable name in industrial
                mobility solutions.
              </span>
            </p>
          </div>

          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              "ISO 9001:2015 Certified",
              "ISO 14001:2015 Certified",
              "Make in India",
              "Custom Engineering",
              "Pan-India Delivery",
            ].map((badge) => (
              <div
                key={badge}
                className="px-5 py-2.5 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
            <div className="flex-1 flex flex-col justify-between order-2 lg:order-1">
              <div className="flex flex-col gap-5">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Engineering Mobility Since Day One
                </h2>
                <div className="h-1 w-20 bg-blue-600 rounded-full"></div>
              </div>

              <div className="mt-6 lg:mt-10 text-slate-600 text-lg leading-relaxed space-y-6">
                <p>
                  At Casters Global, we design and produce caster wheels that
                  combine precision engineering with industry-grade durability.
                  Our journey began with a simple mission — to redefine mobility
                  standards in industrial applications. Today, we serve clients
                  across continents with reliability, innovation, and
                  world-class service.
                </p>
                <p>
                  Our facility uses advanced CNC machining, ISO-aligned quality
                  control, and eco-friendly materials to deliver products that
                  perform under pressure — wherever they serve.
                </p>
                <p>
                  We believe in mobility that empowers industries to move
                  forward, safely and efficiently. Every caster we build is a
                  testament to our commitment to quality, innovation, and
                  customer success.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <span className="px-5 py-2 bg-gray-100 rounded text-sm font-semibold border border-gray-200 text-gray-700">
                  ISO 9001:2015 Certified
                </span>
                <span className="px-5 py-2 bg-gray-100 rounded text-sm font-semibold border border-gray-200 text-gray-700">
                  Make In India
                </span>
              </div>
            </div>

            {/* <div className="flex-1 order-1 lg:order-2 w-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-4/3 lg:aspect-auto h-full">
                <img
                  alt="Close-up of precision heavy-duty castor wheel being manufactured"
                  className="object-cover w-full h-full"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSMDUEmZ4Fp8tHTJxXOOzizUnwLmH0ZE1FCPC3yk_qXX1XFsy1UfPJe4tQERvfSmaJCihFozt7IusWYuWnD4tBImmfuwlqHjz3LnS45QdvXhkF3ziOqZiXQz0NQ9j2U0BMncfcKCqjeBaqxMpfKy3hsjGbpNzcwZrQb7e5qlfYOxaVtZ-hVVqLiygz0ssOQJcA_z0BxCtjh_4XxoTnjE7xmRj-fOZ4XMsuMZgvFf5M2VNy8mmNUcpSEHn0LdhKfwvRTOUYRDU50ocJ"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-medium text-sm sm:text-base">
                    Precision engineered in our Manesar facility
                  </p>
                </div>
              </div>
            </div> */}

            <AboutHero/>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-linear-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Our Core Principles
            </h2>
            <div className="mt-5 h-1.5 w-28 mx-auto bg-linear-to-r from-blue-500 via-indigo-500 to-teal-500 rounded-full" />
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Three foundational pillars shape every product we engineer, every
              process we refine, and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10">
            {principles.map((principle, index) => (
              <div
                key={index}
                className={`
                  group relative 
                  bg-white 
                  border border-gray-200 
                  rounded-2xl lg:rounded-3xl 
                  p-7 md:p-8 lg:p-10 
                  shadow-sm hover:shadow-2xl 
                  transition-all duration-300
                  hover:-translate-y-3 hover:scale-[1.02]
                  hover:border-${principle.color}-400
                `}
              >
                <div className="relative z-10">
                  <div
                    className={`
                      inline-flex items-center justify-center 
                      w-16 h-16 md:w-20 md:h-20 
                      rounded-2xl bg-linear-to-br 
                      from-${principle.color}-500 to-${principle.color}-700 
                      text-white mb-6 
                      shadow-lg shadow-${principle.color}-700/30 
                      group-hover:scale-110 group-hover:rotate-3 
                      transition-all duration-300
                    `}
                  >
                    <principle.icon size={36} className="md:size-40" />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                    {principle.title}
                  </h3>

                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-16 bg-linear-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-4xl md:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-gray-900">
              Our Journey
            </h2>
            <div className="mt-4 h-1.5 w-24 mx-auto rounded-full bg-linear-to-r from-blue-500 via-indigo-600 to-purple-600" />
            <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
              From small workshop to modern manufacturing — focused on quality &
              trust.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-[2rem] left-6 right-6 h-0.5 bg-linear-to-r from-transparent via-gray-300 rounded-full" />

            <div className="grid md:grid-cols-4 gap-6 md:gap-4 lg:gap-6 relative">
              {[
                {
                  year: "2018",
                  title: "The Beginning",
                  desc: "Founded in a small workshop in New Delhi with a vision to build world-class castors.",
                  color: "blue",
                },
                {
                  year: "2024",
                  title: "Going Global",
                  desc: "Secured our first major international partnership and expanded exports.",
                  color: "blue",
                },
                {
                  year: "2025",
                  title: "Expansion to Haryana ",
                  desc: "Inaugurated a 50,000 sq. ft. fully automated manufacturing facility.",
                  color: "blue",
                },
                {
                  year: "2026",
                  title: "Sustainable Future",
                  desc: "Launched eco-friendly and sustainable castor solutions.",
                  color: "blue",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center group pb-4 md:pb-0 transition-all duration-300"
                >
                  <div
                    className={`
                      relative z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-14 md:h-14 lg:w-16 lg:h-16
                      rounded-full bg-white 
                      border-4 border-${item.color}-600
                      flex items-center justify-center shadow-lg shadow-${item.color}-900/20
                      group-hover:scale-110 group-hover:shadow-${item.color}-600/40
                      transition-all duration-300
                    `}
                  >
                    <span
                      className={`
                        text-base sm:text-lg md:text-base lg:text-lg font-bold 
                        text-${item.color}-600                       `}
                    >
                      {item.year}
                    </span>
                  </div>

                  <div
                    className={`
                      relative mt-5 md:h-36 md:mt-6 w-full max-w-65 sm:max-w-70
                      rounded-2xl md:rounded-2.5xl p-5 sm:p-6 md:p-5 lg:p-6
                      bg-white border border-gray-200 shadow-md 
                      hover:shadow-xl hover:border-${item.color}-400
                      transition-all duration-300 group-hover:-translate-y-1 
                    `}
                  >
                    <h3 className="text-base sm:text-lg md:text-base lg:text-lg font-bold text-gray-900 mb-2.5 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {i < 3 && (
                    <div className="md:hidden absolute top-14 left-1/2 w-0.5 h-20 bg-gray-300 -translate-x-1/2 z-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-center mt-12 md:mt-16 text-sm sm:text-base text-gray-500 italic font-medium">
            Building better mobility — every day since 2018
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 mb-12 lg:mb-16 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Leadership Team
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl text-center mx-auto">
              Meet the experts steering Casters Global towards innovation and
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                name: "Dharmapal Singh",
                role: "Founder & CEO",
                img: "./leaders/Dharampal_singh.png",
              },
              {
                name: "Pradeep Kumar",
                role: "Co-founder & Managing Director",
                img: "./leaders/pradeep_kumar.jpeg",
              },
              {
                name: "Seema Verma",
                role: "Head of Business Operations",
                img: "./leaders/Seema_verma.png",
              },
              {
                name: "Saurabh Suman",
                role: "Head of Sales & Revenue",
                img: "./leaders/Suman_sourav_panday.png",
              },
              {
                name: "Richa Verma",
                role: "Head of Customer Experience",
                img: "./leaders/Richa_verma.png",
              },
            ].map((person, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-3/4">
                  <img
                    src={person.img}
                    alt={`${person.name} - ${person.role}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-3 text-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm mt-1">
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryForm />
    </div>
  );
}
