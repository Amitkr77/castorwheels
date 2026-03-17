"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  IoArrowForwardOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";

export default function AboutCarousel() {
  const images = [
    "/about/1.png",
    "/about/2.png",
    "/about/3.png",
    "/about/4.png",
    "/about/5.png",
    "/about/6.png",
  ];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetAutoplay = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
  };

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // slightly longer interval feels more premium

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-4/3 sm:aspect-video lg:aspect-21/10 max-h-[90vh] overflow-hidden bg-gray-900">
      {/* Main container – controls aspect ratio responsively */}
      <div className="absolute inset-0">
        {/* Slides */}
        <div
          className="flex h-full w-full transition-transform duration-800 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="relative h-full w-full shrink-0">
              <img
                src={src}
                alt={`Hero slide ${index + 1} - industrial castors`}
                className="h-full w-full object-cover object-center brightness-[0.65] contrast-[1.05]"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          ))}
        </div>
        
        {/* <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
        >
          <IoChevronBackOutline size={22} />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition"
        >
          <IoChevronForwardOutline size={22} />
        </button> */}

        {/* Dots */}
        {/* <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                current === i ? "bg-white w-6" : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div> */}

        {/* Gradient overlay – more subtle and modern */}
        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/30 to-transparent" />

        {/* Content – better vertical spacing & scaling */}
        <div className="absolute inset-0 z-10 flex items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16">
          <div className="w-full max-w-5xl text-center space-y-6 sm:space-y-8 md:space-y-10">
           

            {/* Headline – better responsive sizing */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
                           Engineering Mobility <br /> Moving the World Forward.

            </h1>

            {/* Description – constrained width + better line height */}
            <p className="mx-auto max-w-xl md:max-w-2xl text-base sm:text-lg md:text-xl text-slate-200 font-light leading-relaxed opacity-95">
                A showcase of precision manufacturing, traditional craftsmanship,
              and modern engineering in heavy-duty castor production.
            </p>

            {/* CTAs – better stacking & sizing on mobile */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="/solution"
                className="group flex items-center justify-center gap-2.5 rounded-full bg-white/10 px-8 py-4 text-base sm:text-lg font-semibold text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
              >
                Explore Catalog
                <IoArrowForwardOutline className="text-xl transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

             
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}
