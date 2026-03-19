"use client";
import React, { useEffect, useState, useRef } from "react";

export default function AboutHero() {
  const images = [
    "/about/1.png",
    "/about/2.png",
    "/about/3.png",
    "/about/4.png",
    "/about/5.png",
    "/about/6.png",
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // Autoplay (single clean system)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  return (
    <div className="flex-1 order-1 lg:order-2 w-full">
      <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full aspect-4/3 lg:aspect-auto">
        {/* Slides */}
        <div className="relative w-full h-full">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Hero slide ${index + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out
                ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>

        {/* <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/30 to-transparent" /> */}

        <div className="absolute bottom-0 left-0 right-0 p-6 z-20 ">
          <p className="text-white font-medium text-sm sm:text-lg bg-black/50  inline p-2">
            Precision engineered in our Manesar facility
          </p>
        </div>
      </div>
    </div>
  );
}
