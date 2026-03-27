import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Post } from "@/data/posts";

const FeaturedSlider = ({ posts }: { posts: Post[] }) => {
  const [current, setCurrent] = useState(0);
  const slides = posts.slice(0, 3);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [slides.length]);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  if (!slides.length) return null;

  const slide = slides[current];

  return (
    <div className="duid-container py-4">
      <div className="relative duid-slider-card group">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        />
        <div className="duid-slider-overlay" />

        <div className="absolute bottom-0 left-0 right-0 p-5">
          <Link to={`/${slide.slug}`} className="block">
            <h3 className="text-lg font-bold text-white line-clamp-2 mb-1">{slide.title}</h3>
            <p className="text-sm text-white/70">
              {new Date(slide.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
            </p>
          </Link>
        </div>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "w-6 bg-white" : "w-1.5 bg-white/50"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedSlider;
