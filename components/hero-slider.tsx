"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

interface HeroSliderProps {
  slides: SlideProps[];
}

export function HeroSlider({ slides }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div
      className="relative h-[500px] md:h-[600px] overflow-hidden"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero Slider"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={index !== currentSlide}
          role="group"
          aria-roledescription="slide"
          aria-label={`Slide ${index + 1} of ${slides.length}`}
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.image || "/placeholder.svg?height=600&width=1920"}
              alt=""
              fill
              priority={index === 0}
              className="object-cover"
              sizes="100vw"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 hero-gradient"></div>
            <div className="absolute inset-0 flex flex-col justify-center w-full">
              <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl animate-slide-up">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 max-w-xl">
                    {slide.subtitle}
                  </p>
                  <Link
                    href={slide.buttonLink}
                    className="bg-maroon-600 hover:bg-maroon-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md transition-colors font-medium inline-flex items-center text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroon-500"
                  >
                    {slide.buttonText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors opacity-80 hover:opacity-100 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} aria-hidden="true" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors opacity-80 hover:opacity-100 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <ChevronRight size={24} aria-hidden="true" />
      </button>

      <div
        className="absolute z-50 bottom-6 left-1/2 -translate-x-1/2 flex space-x-2"
        role="tablist"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === currentSlide}
            role="tab"
            tabIndex={index === currentSlide ? 0 : -1}
          />
        ))}
      </div>
    </div>
  );
}
