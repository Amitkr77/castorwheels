import React from "react";

import { MdArrowOutward } from "react-icons/md";
import FeaturedSolutions from "../components/FeaturedSolutions";
import EnquiryForm from "../components/EnquiryForm";
import Carousel from "../components/Carousel";
import WhyChooseUs from "../components/WhyChooseUs";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote:
      "The consistency in quality for the heavy-duty series has significantly reduced our maintenance downtime. Exceptional engineering.",
    author: "Rajesh J.",
    role: "Plant Manager, AutoCorp",
    avatarColor: "blue",
    rating: 5,
  },
  {
    quote:
      "We needed custom non-marking wheels for our new hospital wing. Comfort Castors delivered exactly what we specified, on time and with great support.",
    author: "Dr. Anita S.",
    role: "Procurement Head, MediCare",
    avatarColor: "teal",
    rating: 5,
  },
  {
    quote:
      "A wide range of aesthetically pleasing castors that perfectly complement our modern office furniture line. Highly recommend for design-focused projects.",
    author: "Vikram K.",
    role: "Design Lead, FurniStyle",
    avatarColor: "indigo",
    rating: 4.5,
  },
  {
    quote:
      "Switched to their polyurethane castors last year — excellent floor protection, smooth rolling even under full load, and zero complaints from our warehouse team.",
    author: "Priya M.",
    role: "Operations Manager, LogiTech India",
    avatarColor: "purple",
    rating: 5,
  },
];

export default function Home() {
  return (
    <section>
      <main className="flex-1">
        <Carousel />

        <section
          id="portfolio"
          className="relative py-24 bg-slate-50 border-t border-slate-200"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="inline-block text-primary font-bold tracking-widest uppercase text-xs">
                  Our Portfolio
                </span>
                <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
                  Explore by Industry
                </h2>
                <p className="mt-3 max-w-xl text-slate-600">
                  Precision-engineered castor solutions tailored for diverse
                  industrial and commercial applications.
                </p>
              </div>

              {/* Explore All Button */}
              <Link
                to="/solution"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 active:scale-95"
              >
                Explore All Solutions
                <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              


            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Automotive Assembly",
                  desc: "Heavy-duty trolleys & machinery",
                  image: "./featured-product/automotive assembly.png",
                  link: "/solution/automotive-assembly",
                  tag: "Industrial",
                },
                {
                  title: "Hospitality & Medical",
                  desc: "Hospital beds & diagnostic carts",
                  image: "./featured-product/twin wheel for medical brake.png",
                  link: "/solution/medical",
                  tag: "Medical",
                },
                {
                  title: "Retail & Shopping",
                  desc: "Shopping carts & retail fixtures",
                  image:
                    "./featured-product/soft rubber caster for furniture.png",
                  link: "/solution/furniture-castors",
                  tag: "Retail",
                },
                {
                  title: "Warehousing & Logistics",
                  desc: "Pallet trucks & material handling",
                  image: "./featured-product/nylon swivel pro.png",
                  link: "/solution/warehouse-castor",
                  tag: "Logistics",
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  {/* Image */}
                  <div className="relative aspect-3/4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover  transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />

                    {/* Tag */}
                    <span className="absolute top-4 left-4 z-20 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 backdrop-blur">
                      {item.tag}
                    </span>

                    {/* Title */}
                    <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-200 opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between p-6">
                    <span className="text-sm font-semibold text-slate-600">
                      Explore solutions
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white transition-all duration-300 group-hover:bg-primary group-hover:rotate-0 rotate-45">
                      <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <WhyChooseUs />

        <FeaturedSolutions />
        <section
          id="testimonials"
          className="py-20 md:py-24 lg:py-28 bg-slate-900 text-white relative overflow-hidden"
        >
          {/* Decorative blurred blobs */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 md:h-96 md:w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 md:h-96 md:w-96 rounded-full bg-purple-600/20 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Trusted by Industry Leaders
              </h2>
              <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
                Hear from manufacturing, healthcare, and design professionals
                who rely on our mobility solutions every day.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className={`
                group relative rounded-2xl md:rounded-3xl 
                bg-slate-800/50 backdrop-blur-sm 
                p-6 md:p-8 border border-slate-700/80 
                transition-all duration-300 ease-out
                hover:bg-slate-800/80 hover:shadow-xl hover:shadow-slate-900/40
                hover:-translate-y-1 hover:scale-[1.02]
              `}
                >
                  {/* Stars */}
                  <div className="flex text-amber-400 mb-5">
                    {[...Array(5)].map((_, i) => {
                      if (t.rating === 5 || i < Math.floor(t.rating)) {
                        return (
                          <IoMdStar key={i} className="text-lg md:text-xl" />
                        );
                      }
                      if (i === Math.floor(t.rating) && t.rating % 1 !== 0) {
                        return (
                          <IoMdStarHalf
                            key={i}
                            className="text-lg md:text-xl"
                          />
                        );
                      }
                      return null;
                    })}
                  </div>

                  <p className="text-slate-300 mb-6 md:mb-8 italic leading-relaxed text-base md:text-lg">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div
                      className={`
                    h-10 w-10 md:h-12 md:w-12 rounded-full 
                    bg-gradient-to-br flex items-center justify-center 
                    font-bold text-white text-sm md:text-base shadow-md
                    transition-transform group-hover:scale-110
                  `}
                      style={{
                        background: `linear-gradient(to bottom right, var(--${t.avatarColor}-600), var(--${t.avatarColor}-700))`,
                      }}
                    >
                      {t.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>

                    <div>
                      <h4 className="font-semibold text-white text-sm md:text-base">
                        {t.author}
                      </h4>
                      <p className="text-xs md:text-sm text-slate-400">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* WhatsApp Floating Button – kept but improved */}
        </section>

        <EnquiryForm />
      </main>
    </section>
  );
}
