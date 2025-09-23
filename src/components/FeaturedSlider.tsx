
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Navigation } from "lucide-react";

// Sample featured cars data
const featuredCars = [
  {
    id: 1,
    title: "2022 Mercedes-Benz S-Class",
    image: "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d99?q=80&w=2128&auto=format&fit=crop",
    price: "KSh 12,500,000",
    description: "Experience luxury and innovation with this slightly used flagship sedan.",
    condition: "Slightly Used",
    mileage: "15,000 km",
    location: "Nairobi",
  },
  {
    id: 2,
    title: "2023 Toyota Land Cruiser",
    image: "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=2070&auto=format&fit=crop",
    price: "KSh 9,800,000",
    description: "Unmatched power and comfort for both on and off-road adventures.",
    condition: "Showroom",
    mileage: "0 km",
    location: "Mombasa",
  },
  {
    id: 3,
    title: "2021 BMW X7",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop",
    price: "KSh 10,200,000",
    description: "Luxury SUV with premium features and exceptional driving dynamics.",
    condition: "Slightly Used",
    mileage: "22,000 km",
    location: "Kisumu",
  },
];

const FeaturedSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % featuredCars.length);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + featuredCars.length) % featuredCars.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Slides */}
      {featuredCars.map((car, index) => (
        <div
          key={car.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.8)), url(${car.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        ></div>
      ))}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full container mx-auto px-4">
        <div className="w-full md:max-w-2xl">
          {featuredCars.map((car, index) => (
            <div 
              key={car.id}
              className={`transition-all duration-700 ease-in-out ${
                currentSlide === index 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10 absolute pointer-events-none"
              }`}
            >
              <div className="flex items-center mb-2">
                <span className="text-kenya-purple uppercase font-semibold tracking-wider text-sm">{car.condition}</span>
                <div className="w-10 h-px bg-kenya-purple mx-3"></div>
                <span className="text-white/70 text-sm">{car.mileage}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">{car.title}</h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-6 max-w-xl">{car.description}</p>
              
              <div className="flex items-center mb-8">
                <span className="text-2xl md:text-3xl font-bold text-kenya-purple">{car.price}</span>
                <div className="flex items-center ml-6">
                  <Navigation className="w-4 h-4 text-white/60 mr-1" />
                  <span className="text-white/60">{car.location}</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary">View Details</Button>
                <Button className="btn-secondary">Book Test Drive</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center">
        {featuredCars.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full mx-2 transition-all ${
              currentSlide === index ? "bg-kenya-purple w-8" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center hover:bg-black/50 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default FeaturedSlider;
