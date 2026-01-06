'use client';

import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Eten Corporation",
    subtitle: "A leading distributor in the meat industry, emphasizing quality assurance and customer satisfaction.",
    bgImage: "/images/1.jpg"
  },
  {
    id: 2,
    title: "Quality Meats from Trusted Sources",
    subtitle: "Premium beef, chicken, and turkey sourced from reputable North American producers.",
    bgImage: "/images/2.jpg"
  },
  {
    id: 3,
    title: "Halal Certified Products",
    subtitle: "Our commitment to halal integrity, with fully certified sourcing and handling.",
    bgImage: "/images/3.png"
  }
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-brand-secondary">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center animate-kenburns"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
             <div className={index === currentSlide ? 'animate-slide-in-up' : ''}>
                <h2 className="text-4xl md:text-7xl font-bold mb-4 drop-shadow-lg">{slide.title}</h2>
                <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90">{slide.subtitle}</p>
             </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
